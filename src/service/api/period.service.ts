import {callApiBaseAsync} from "@service/api/_base";

const endpoint = '/periodo-turma';

export const getPeriodsApiService = async () => {
    return callApiBaseAsync(endpoint, {
        title: 'API - periodApiService',
        method: 'GET'
    });
}
