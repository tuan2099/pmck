type Role = 'User' | 'Admin'

export interface User {
  course_registrations: any
  id: number
  roles: Role[]
  email: string
  username?: string
  date_of_birth?: string // ISO 8610
  avatar?: string
  address?: string
  phone_number?: string
  createdAt: string
  updatedAt: string
  about_me: string
  blocked: boolean
  confirmed: boolean
  connect: string
  full_name: string
  location: string
  provider: string
  top_skill: string
}
