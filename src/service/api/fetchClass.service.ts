import { datacore } from "~/models"
import { callApiBaseAsync } from "./_base"

const endpoint = '/turma';

export const getClassApiService = async (id:number): Promise<datacore.FetchResponse<datacore.ResponseClass>> => { 
    return callApiBaseAsync(`${endpoint}/${id}`,  {
        title: 'CLASS API - classApiService',
        method: 'GET',
    });
}