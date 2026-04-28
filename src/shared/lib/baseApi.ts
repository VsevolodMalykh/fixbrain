import axios from 'axios'
import { userStorage } from '../../features/auth/model/userStorage'
export const baseApi = axios.create({
    headers: {
        "Content-Type": "application/json"
    },
    baseURL: import.meta.env.VITE_BASE_URL || "http://localhost:3009"
})

baseApi.interceptors.request.use((config) => {
    const accessToken = userStorage.getAccessToken()
    if(accessToken){
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
})