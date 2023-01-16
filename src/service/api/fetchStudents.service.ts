import { datacore } from "~/models"
import { callApiBaseAsync } from "./_base"

const endpoint = '/aluno';

export const getStudentsApiService = async (): Promise<datacore.FetchResponse<datacore.ResponseStudent[]>> => { 
    return callApiBaseAsync(`${endpoint}`,  {
        title: 'STUDENT API - studentApiService',
        method: 'GET',
    });
}