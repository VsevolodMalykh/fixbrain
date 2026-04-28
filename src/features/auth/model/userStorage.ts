import type { UserType } from "../types/user-type"

export const userStorage = {
    getAccessToken: () => localStorage.getItem('accessToken'),
    getUser: (): UserType | null => {
        const strUser = localStorage.getItem('user')
        if(strUser){
            return JSON.parse(strUser)
        }
        return null
    },

    setAccessToken: (token: string) => localStorage.setItem("accessToken", token),
    setUser: (user: UserType) => localStorage.setItem("user", JSON.stringify(user)),
}