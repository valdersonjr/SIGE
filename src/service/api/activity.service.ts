import { datacore } from "~/models"
import { callApiBaseAsync } from "./_base"

const endpoint = '/atividade';

export const getActivitiesApiService = async (): Promise<datacore.FetchResponse<any>> => {
    return callApiBaseAsync(`${endpoint}`, {
        title: 'ACTIVITY API - activityApiService',
        method: 'GET'
    });
}
