import type { User, CreateUserRequest, UpdateUserRequest } from '../types/user.types'

// Mock data for demonstration
const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
    status: 'active',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face',
    status: 'active',
    createdAt: '2024-01-16T14:30:00Z',
    updatedAt: '2024-01-16T14:30:00Z',
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob.johnson@example.com',
    status: 'inactive',
    createdAt: '2024-01-17T09:15:00Z',
    updatedAt: '2024-01-17T09:15:00Z',
  },
]

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export class UserService {
  private static users: User[] = [...mockUsers]

  static async getUsers(): Promise<User[]> {
    await delay(500) // Simulate network delay
    return [...this.users]
  }

  static async getUserById(id: string): Promise<User | null> {
    await delay(300)
    return this.users.find(user => user.id === id) || null
  }

  static async createUser(userData: CreateUserRequest): Promise<User> {
    await delay(800)
    
    const newUser: User = {
      ...userData,
      id: Date.now().toString(),
      status: 'active',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    
    this.users.push(newUser)
    return newUser
  }

  static async updateUser(id: string, userData: UpdateUserRequest): Promise<User> {
    await delay(600)
    
    const userIndex = this.users.findIndex(user => user.id === id)
    if (userIndex === -1) {
      throw new Error('User not found')
    }
    
    const updatedUser = {
      ...this.users[userIndex],
      ...userData,
      updatedAt: new Date().toISOString(),
    }
    
    this.users[userIndex] = updatedUser
    return updatedUser
  }

  static async deleteUser(id: string): Promise<void> {
    await delay(400)
    
    const userIndex = this.users.findIndex(user => user.id === id)
    if (userIndex === -1) {
      throw new Error('User not found')
    }
    
    this.users.splice(userIndex, 1)
  }
}
