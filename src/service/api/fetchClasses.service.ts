import { datacore } from "~/models"
import { callApiBaseAsync } from "./_base"

const endpoint = '/turma';

export const getClassesApiService = async (): Promise<datacore.FetchResponse<datacore.ResponseClass[]>> => { 
    return callApiBaseAsync(`${endpoint}`,  {
        title: 'CLASS API - classApiService',
        method: 'GET',
    });
}