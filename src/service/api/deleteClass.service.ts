import { datacore } from "~/models";
import { callApiBaseAsync } from "./_base";

const endpoint = '/turma';

export const deleteClassApiService = async (id :number): Promise<datacore.FetchResponse<string>> => { 
    return callApiBaseAsync(`${endpoint}/${id}`,  {
        title: 'CLASS API - classApiService',
        method: 'DELETE',
    });
}