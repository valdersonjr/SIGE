import { datacore } from "~/models"
import { callApiBaseAsync } from "./_base"

const endpoint = '/matricula';

export const getRegistrationsApiService = async (): Promise<datacore.FetchResponse<any>> => {
    return callApiBaseAsync(`${endpoint}`, {
        title: 'REGISTRATION API - registrationApiService',
        method: 'GET'
    });
}

export const deleteRegistrationApiService = async (id: number): Promise<datacore.FetchResponse<any>> => {
    return callApiBaseAsync(`${endpoint}/${id}`, {
        title: 'API - registrationApiService',
        method: 'DELETE'
    });
}
