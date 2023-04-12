import {datacore} from "~/models"
import {callApiBaseAsync} from "./_base"

const endpoint = '/aluno';

export const createStudentApiService = async (data: any): Promise<datacore.FetchResponse<any>> => {
    return callApiBaseAsync(endpoint, {
        title: 'AUTH API - createStudentApiService',
        method: 'POST',
        headers: new Headers(),
        body: {...data},
    });
};

export const updateStudentApiService = async (id: number, data: any): Promise<any> => {
    return callApiBaseAsync(`${endpoint}/${id}`, {
        title: 'API - studentApiService',
        method: 'PUT',
        body: {
            pai_id: 1,
            mae_id: 1,
            nome: data?.nome,
            data_nascimento: data?.data_nascimento,
            pais_juntos: data?.pais_juntos,
            responsavel_financeiro: data?.responsavel_financeiro,
            nome_convenio_medico: data?.nome_convenio_medico,
            nome_hospital_preferencia: data?.nome_hospital_preferencia,
            observacoes_medicas: data?.observacoes_medicas,
            ativo: true
        }
    });
};

export const getAllStudentsApiService = async (): Promise<datacore.FetchResponse<datacore.ResponseStudent[]>> => {
    return callApiBaseAsync(endpoint, {
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
