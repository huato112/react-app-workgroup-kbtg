export interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'user' | 'moderator'
  avatar?: string
  createdAt: string
  updatedAt: string
  isActive: boolean
}

export interface CreateUserRequest {
  name: string
  email: string
  role: 'admin' | 'user' | 'moderator'
}

export interface UpdateUserRequest {
  name?: string
  email?: string
  role?: 'admin' | 'user' | 'moderator'
  isActive?: boolean
}