import { baseApi } from "../../../shared/lib/baseApi";
import type { BookingPostType, SpaceType } from "../types/spaces-type";

export class SpacesAPI {
    static async getAll(): Promise<SpaceType[]> {
        try {
            const response = await baseApi.get('/spaces')
            return response.data
        } catch (error) {
            alert(error)
            return []
        }
    }
    static async getById(id: number): Promise<SpaceType | undefined> {
        const response = await (await baseApi.get(`/spaces/${id}`)).data
        if(response){
            return response
        }
        return null

    }

    static async bookingSpace(booking: BookingPostType) {
        try {
            const response = await (await baseApi.post('/bookings', booking)).data
            return response
        } catch (error) {
            console.log(error)
            return false
        }
    }
}