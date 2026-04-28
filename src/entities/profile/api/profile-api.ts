import type { RegType, UserType } from "../../../features/auth/types/user-type"
import { baseApi } from "../../../shared/lib/baseApi"

export const ProfileApi = {
    getMe: async (): Promise<UserType> => {
        try {
          const res = await baseApi.get<UserType>('/users/me')
          
          if (res.status != 200) {
            throw new Error(`Ошибка со статусом ${res.status}`)
          }
    
          return res.data 
        } catch (error: unknown) {
            if (typeof error === 'string') {
                alert(error)
            }
        }
    },
    updateMe: async (user: RegType): Promise<UserType> => {
        try {
          const res = await baseApi.patch<UserType>('/users/me', user)
          
          if (res.status != 200) {
            throw new Error(`Ошибка со статусом ${res.status}`)
          }
    
          return res.data 
        } catch (error: unknown) {
            if (typeof error === 'string') {
                alert(error)
            }
        }
    },
}