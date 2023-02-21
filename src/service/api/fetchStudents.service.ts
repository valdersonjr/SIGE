import {datacore} from "~/models"
import {callApiBaseAsync} from "./_base"

const endpoint = '/aluno';

export const getAllStudentsApiService = async (): Promise<datacore.FetchResponse<datacore.ResponseStudent[]>> => {
    return callApiBaseAsync(`${endpoint}`, {
        title: 'STUDENT API - studentApiService',
        method: 'GET',
    });
}

export const getStudentByIdApiService = async (id: number): Promise<datacore.FetchResponse<datacore.ResponseStudent>> => {
    return callApiBaseAsync(`${endpoint}/${id}`, {
        title: 'STUDENT API - studentApiService',
        method: 'GET',
    });
}

export const searchStudentApiService = async (data: any): Promise<datacore.FetchResponse<any>> => {
    return callApiBaseAsync(`${endpoint}/search`, {
        title: 'API - studentApiService',
        method: 'POST',
        body: {
            nome: data?.nome,
            situacao: data?.situacao
        }
    });
}

export const deleteStudentApiService = async (id: number): Promise<datacore.FetchResponse<string>> => {
    return callApiBaseAsync(`${endpoint}/${id}`, {
        title: 'STUDENT API - studentApiService',
        method: 'DELETE',
    });
}

export const setStudentActiveApiService = async (id: number): Promise<datacore.FetchResponse<string>> => {
    return callApiBaseAsync(`${endpoint}/${id}/ativar`, {
        title: 'STUDENT API - studentApiService',
        method: 'PUT',
    });
}

export const setStudentInactiveApiService = async (id: number): Promise<datacore.FetchResponse<string>> => {
    return callApiBaseAsync(`${endpoint}/${id}/inativar`, {
        title: 'STUDENT API - studentApiService',
        method: 'PUT',
    });
}
