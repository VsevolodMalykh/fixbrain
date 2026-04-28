export type UserType = {
  id: number
  email: string
  name: string
  password: string
  role: 'guest' | 'client' | 'manager'
  isActive: boolean
}

export type TUserResponse = {
    user: UserType
    accessToken: string
    refreshToken: string
}

export type RegType = Record<"password" | "email" | "name", string>
export type AuthType = Omit<RegType, 'name'>