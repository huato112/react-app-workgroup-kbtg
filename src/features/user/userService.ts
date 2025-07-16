import { User, CreateUserRequest, UpdateUserRequest } from './types'

// Mock data for development
const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@kbtg.tech',
    role: 'admin',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-15T10:30:00Z',
    isActive: true,
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@kbtg.tech',
    role: 'user',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face',
    createdAt: '2024-01-16T14:20:00Z',
    updatedAt: '2024-01-16T14:20:00Z',
    isActive: true,
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike.johnson@kbtg.tech',
    role: 'moderator',
    createdAt: '2024-01-17T09:15:00Z',
    updatedAt: '2024-01-17T09:15:00Z',
    isActive: false,
  },
  {
    id: '4',
    name: 'Sarah Wilson',
    email: 'sarah.wilson@kbtg.tech',
    role: 'user',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face',
    createdAt: '2024-01-18T16:45:00Z',
    updatedAt: '2024-01-18T16:45:00Z',
    isActive: true,
  },
]

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export class UserService {
  private static users = [...mockUsers]

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
      id: (this.users.length + 1).toString(),
      ...userData,
      avatar: undefined,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isActive: true,
    }

    this.users.push(newUser)
    return newUser
  }

  static async updateUser(id: string, userData: UpdateUserRequest): Promise<User | null> {
    await delay(600)
    
    const userIndex = this.users.findIndex(user => user.id === id)
    if (userIndex === -1) return null

    const updatedUser = {
      ...this.users[userIndex],
      ...userData,
      updatedAt: new Date().toISOString(),
    }

    this.users[userIndex] = updatedUser
    return updatedUser
  }

  static async deleteUser(id: string): Promise<boolean> {
    await delay(400)
    
    const userIndex = this.users.findIndex(user => user.id === id)
    if (userIndex === -1) return false

    this.users.splice(userIndex, 1)
    return true
  }

  static async searchUsers(query: string): Promise<User[]> {
    await delay(400)
    
    const lowercaseQuery = query.toLowerCase()
    return this.users.filter(user =>
      user.name.toLowerCase().includes(lowercaseQuery) ||
      user.email.toLowerCase().includes(lowercaseQuery)
    )
  }
}