import { baseApi } from "../../../shared/lib/baseApi";
import type { TUser, TUserRespose } from "../model/types";

export const RegisterApi = {
    register: async (user: TUser): Promise<TUserRespose | undefined> => {
        try {
          const res = await baseApi.post<TUserRespose>('/auth/register', user)
          
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
    login: async (user: TUser): Promise<TUserRespose | undefined> => {
        try {
          const res = await baseApi.post<TUserRespose>('/auth/login', user)
          
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
}