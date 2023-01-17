import { datacore } from "~/models"
import { callApiBaseAsync } from "./_base"

const endpoint = '/usuario';

export const getUsertsApiService = async (): Promise<datacore.FetchResponse<datacore.FetchUserResponse[]>> => { 
    return callApiBaseAsync(`${endpoint}`,  {
        title: 'USER API - userApiService',
        method: 'GET',
    });
}