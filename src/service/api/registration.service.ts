import { datacore } from "~/models"
import { callApiBaseAsync } from "./_base"

const endpoint = '/matricula';

export const getRegistrationsApiService = async (): Promise<datacore.FetchResponse<any>> => {
    return callApiBaseAsync(`${endpoint}`, {
        title: 'REGISTRATION API - registrationApiService',
        method: 'GET'
    });
}
