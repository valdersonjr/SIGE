import { FetchResponse } from "~/models/datacore";
import {callApiBaseAsync} from "./_base"

export const getReportApiService = async (endpoint:string, page:number): Promise<FetchResponse<any>> => {
    return callApiBaseAsync(`/relatorios/${endpoint}?page=${page}&pagination=5`, {
        title: 'API - reportApiService',
        method: 'GET'
    });
}