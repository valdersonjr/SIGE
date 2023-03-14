import {callApiBaseAsync} from "@service/api/_base";
import { FetchResponse, ResponseClassPeriod } from "~/models/datacore";

const endpoint = '/periodo-turma';

export const getPeriodsApiService = async ():Promise<FetchResponse<ResponseClassPeriod[]>> => {
    return callApiBaseAsync(endpoint, {
        title: 'API - periodApiService',
        method: 'GET'
    });
}
