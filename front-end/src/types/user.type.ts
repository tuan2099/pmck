type Role = 'User' | 'Admin'

export interface User {
  id: number
  roles: Role[]
  email: string
  username?: string
  date_of_birth?: string // ISO 8610
  avatar?: string
  address?: string
  phone?: string
  createdAt: string
  updatedAt: string
}
