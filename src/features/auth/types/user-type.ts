export type UserType = {
  id: number
  email: string
  name: string
  password: string
  role: 'guest' | 'client' | 'manager' | 'admin'
  isActive: boolean
}
