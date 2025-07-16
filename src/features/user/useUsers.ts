import { useState, useEffect } from 'react'
import { User, CreateUserRequest, UpdateUserRequest } from '@/features/user/types'
import { UserService } from '@/features/user/userService'
import { useAppStore } from '@/store/appStore'
import { toast } from 'sonner'

export function useUsers() {
  const [users, setUsers] = useState<User[]>([])
  const { setLoading, setError, clearError } = useAppStore()

  const fetchUsers = async () => {
    try {
      setLoading(true)
      clearError()
      const fetchedUsers = await UserService.getUsers()
      setUsers(fetchedUsers)
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to fetch users'
      setError(errorMessage)
      toast.error(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  const createUser = async (userData: CreateUserRequest) => {
    try {
      setLoading(true)
      clearError()
      const newUser = await UserService.createUser(userData)
      setUsers(prev => [...prev, newUser])
      toast.success('User created successfully')
      return newUser
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to create user'
      setError(errorMessage)
      toast.error(errorMessage)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const updateUser = async (id: string, userData: UpdateUserRequest) => {
    try {
      setLoading(true)
      clearError()
      const updatedUser = await UserService.updateUser(id, userData)
      if (updatedUser) {
        setUsers(prev => prev.map(user => user.id === id ? updatedUser : user))
        toast.success('User updated successfully')
        return updatedUser
      } else {
        throw new Error('User not found')
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to update user'
      setError(errorMessage)
      toast.error(errorMessage)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const deleteUser = async (id: string) => {
    try {
      setLoading(true)
      clearError()
      const success = await UserService.deleteUser(id)
      if (success) {
        setUsers(prev => prev.filter(user => user.id !== id))
        toast.success('User deleted successfully')
      } else {
        throw new Error('User not found')
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to delete user'
      setError(errorMessage)
      toast.error(errorMessage)
      throw error
    } finally {
      setLoading(false)
    }
  }

  const searchUsers = async (query: string) => {
    try {
      setLoading(true)
      clearError()
      const searchResults = await UserService.searchUsers(query)
      setUsers(searchResults)
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to search users'
      setError(errorMessage)
      toast.error(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return {
    users,
    fetchUsers,
    createUser,
    updateUser,
    deleteUser,
    searchUsers,
  }
}