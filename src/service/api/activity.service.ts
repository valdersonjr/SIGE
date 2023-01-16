import { datacore } from "~/models"
import { callApiBaseAsync } from "./_base"
import {NewActivityProps} from "@templates/NewActivity/NewActivity.interface";

const endpoint = '/atividade';

export const getActivitiesApiService = async (): Promise<datacore.FetchResponse<any>> => {
    return callApiBaseAsync(`${endpoint}`, {
        title: 'API - activityApiService',
        method: 'GET'
    });
}

export const createActivityApiService = async (data: NewActivityProps): Promise<datacore.FetchResponse<any>> => {
    return callApiBaseAsync(`${endpoint}`, {
        title: 'API - activityApiService',
        method: 'POST',
        body: {
            descricao: data.description
        }
    });
}
