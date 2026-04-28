import { baseApi } from "../../../shared/lib/baseApi";
import type { AuthType, RegType, TUserResponse } from "../types/user-type";

export const RegisterApi = {
    register: async (user: RegType): Promise<TUserResponse | undefined> => {
        try {
          const res = await baseApi.post<TUserResponse>('/auth/register', user)
          
          if (res.status != 201) {
            throw new Error(`Ошибка со статусом ${res.status}`)
          }

          return res.data 
        } catch (error: unknown) {
            if (typeof error === 'string') {
                alert(error)
            }
        }  
    },
    login: async (user: AuthType): Promise<TUserResponse | undefined> => {
        try {
          const res = await baseApi.post<TUserResponse>('/auth/login', user)
          
          if (res.status != 200) {
            throw new Error(`Ошибка со статусом ${res.status}`)
          }

          return res.data 
        } catch (error: unknown) {
            if (typeof error === 'string') {
                alert(error)
            }
            return;
        }
    },
}