import { datacore } from "~/models"
import { callApiBaseAsync } from "./_base"
import { ResponseActivities } from "~/models/datacore";

const endpoint = '/atividade';

export const getActivitiesApiService = async (): Promise<datacore.FetchResponse<ResponseActivities[]>> => {
    return callApiBaseAsync(`${endpoint}`, {
        title: 'API - activityApiService',
        method: 'GET'
    });
}

export const getActivityApiService = async (id: number): Promise<datacore.FetchResponse<any>> => {
    return callApiBaseAsync(`${endpoint}/${id}`, {
        title: 'API - activityApiService',
        method: 'GET'
    });
}

export const createActivityApiService = async (description: string): Promise<datacore.FetchResponse<any>> => {
    return callApiBaseAsync(`${endpoint}`, {
        title: 'API - activityApiService',
        method: 'POST',
        body: {
            descricao: description,
            ativo: true
        }
    });
}

export const deleteActivityApiService = async (id: number): Promise<datacore.FetchResponse<string>> => {
    return callApiBaseAsync(`${endpoint}/${id}`, {
        title: 'API - activityApiService',
        method: 'DELETE',
    });
}

export const updateActivityApiService = async (id: number, activity: any): Promise<datacore.FetchResponse<string>> => {
    return callApiBaseAsync(`${endpoint}/${id}`, {
        title: 'API - activityApiService',
        method: 'PUT',
        body: {
            descricao: activity.descricao,
            ativo: activity.ativo
        }
    });
}

export const activeActivityApiService = async (id: number): Promise<datacore.FetchResponse<any>> => {
    return callApiBaseAsync(`${endpoint}/${id}/ativar`, {
        title: 'API - activityApiService',
        method: 'PUT'
    });
}

export const inactiveActivityApiService = async (id: number): Promise<datacore.FetchResponse<any>> => {
    return callApiBaseAsync(`${endpoint}/${id}/inativar`, {
        title: 'API - activityApiService',
        method: 'PUT'
    });
}
