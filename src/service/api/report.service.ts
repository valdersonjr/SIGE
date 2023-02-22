import { FetchResponse } from "~/models/datacore";
import {callApiBaseAsync} from "./_base"

export const getReportApiService = async (endpoint:string, page:number, itemsPerPage:number): Promise<FetchResponse<any>> => {
    return callApiBaseAsync(`/relatorios/${endpoint}?page=${page}&pagination=${itemsPerPage}`, {
        title: 'API - reportApiService',
        method: 'GET'
    });
}