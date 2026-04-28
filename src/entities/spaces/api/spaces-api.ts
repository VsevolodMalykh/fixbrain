import { baseApi } from "../../../shared/lib/baseApi";
import type { SpaceType } from "../types/spaces-type";

export class SpacesAPI {
    static async getAll(): Promise<SpaceType[]>{
        try {
            const response = await baseApi.get('/spaces')
            return response.data
        } catch (error) {
            alert(error)
            return []
        }
    }
}