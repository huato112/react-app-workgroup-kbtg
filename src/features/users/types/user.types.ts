export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  status: 'active' | 'inactive'
  createdAt: string
  updatedAt: string
}

export interface CreateUserRequest {
  name: string
  email: string
  avatar?: string
}

export interface UpdateUserRequest extends Partial<CreateUserRequest> {
  status?: 'active' | 'inactive'
}
