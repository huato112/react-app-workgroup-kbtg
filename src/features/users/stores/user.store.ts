import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import type { User, CreateUserRequest, UpdateUserRequest } from '../types/user.types'
import { UserService } from '../services/user.service'

interface UserState {
  users: User[]
  selectedUser: User | null
  isLoading: boolean
  error: string | null
  
  // Actions
  fetchUsers: () => Promise<void>
  fetchUserById: (id: string) => Promise<void>
  createUser: (userData: CreateUserRequest) => Promise<void>
  updateUser: (id: string, userData: UpdateUserRequest) => Promise<void>
  deleteUser: (id: string) => Promise<void>
  setSelectedUser: (user: User | null) => void
  clearError: () => void
}

export const useUserStore = create<UserState>()(
  devtools(
    (set, get) => ({
      users: [],
      selectedUser: null,
      isLoading: false,
      error: null,

      fetchUsers: async () => {
        set({ isLoading: true, error: null })
        try {
          const users = await UserService.getUsers()
          set({ users, isLoading: false })
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : 'Failed to fetch users',
            isLoading: false 
          })
        }
      },

      fetchUserById: async (id: string) => {
        set({ isLoading: true, error: null })
        try {
          const user = await UserService.getUserById(id)
          set({ selectedUser: user, isLoading: false })
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : 'Failed to fetch user',
            isLoading: false 
          })
        }
      },

      createUser: async (userData: CreateUserRequest) => {
        set({ isLoading: true, error: null })
        try {
          const newUser = await UserService.createUser(userData)
          const { users } = get()
          set({ 
            users: [...users, newUser], 
            isLoading: false 
          })
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : 'Failed to create user',
            isLoading: false 
          })
        }
      },

      updateUser: async (id: string, userData: UpdateUserRequest) => {
        set({ isLoading: true, error: null })
        try {
          const updatedUser = await UserService.updateUser(id, userData)
          const { users } = get()
          set({ 
            users: users.map(user => user.id === id ? updatedUser : user),
            selectedUser: get().selectedUser?.id === id ? updatedUser : get().selectedUser,
            isLoading: false 
          })
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : 'Failed to update user',
            isLoading: false 
          })
        }
      },

      deleteUser: async (id: string) => {
        set({ isLoading: true, error: null })
        try {
          await UserService.deleteUser(id)
          const { users } = get()
          set({ 
            users: users.filter(user => user.id !== id),
            selectedUser: get().selectedUser?.id === id ? null : get().selectedUser,
            isLoading: false 
          })
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : 'Failed to delete user',
            isLoading: false 
          })
        }
      },

      setSelectedUser: (user: User | null) => set({ selectedUser: user }),
      clearError: () => set({ error: null }),
    }),
    {
      name: 'user-store',
    }
  )
)
