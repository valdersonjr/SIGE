import {datacore} from "~/models"
import {callApiBaseAsync} from "./_base"

const endpoint = '/usuario';

export const getAllUsersApiService = async (): Promise<datacore.FetchResponse<datacore.FetchUserResponse[]>> => {
    return callApiBaseAsync(`${endpoint}`, {
        title: 'USER API - userApiService',
        method: 'GET',
    });
}

export const getUserByIdApiService = async (id: number): Promise<datacore.FetchResponse<datacore.FetchUserResponse>> => {
    return callApiBaseAsync(`${endpoint}/${id}`, {
        title: 'USER API - userApiService',
        method: 'GET',
    });
}

export const deleteUserApiService = async (id: number): Promise<datacore.FetchResponse<string>> => {
    return callApiBaseAsync(`${endpoint}/${id}`, {
        title: 'USER API - userApiService',
        method: 'DELETE',
    });
}

export const updateUserApiService = async (user: any): Promise<datacore.FetchResponse<any>> => {
    return callApiBaseAsync(`${endpoint}/${user.id}`, {
        title: 'USER API - userApiService',
        method: 'PUT',
        body: {
            nome: user.nome,
            email: user.email,
            senha: user.senha ? user.senha : null,
            telefone: user.telefone,
            ativo: user.ativo !== null ? user.ativo : true,
        }
    });
}

export const registerUserApiService = async (user: any): Promise<datacore.FetchResponse<any>> => {
    return callApiBaseAsync(`${endpoint}`, {
        title: 'USER API - userApiService',
        method: 'POST',
        body: {
            nome: user.nome,
            email: user.email,
            senha: user.senha,
            telefone: user.telefone,
            ativo: true,
            perfis: user.perfis
        }
    });
}

export const registerUserToLoginApiSeervice = async (lUser: { name: string; email: string; password: string; phone: string; }): Promise<datacore.FetchResponse<any>> => {
    return callApiBaseAsync(`${endpoint}/cadastrar`, {
        title: 'USER API - userApiService',
        method: 'POST',
        body: {
            nome: lUser.name,
            email: lUser.email,
            senha: lUser.password,
            telefone: lUser.phone,
        }
    });
}

export const inactivateUserApiService = async (id: number) => {
    return callApiBaseAsync(`${endpoint}/${id}/inativar`, {
        title: 'USER API - userApiService',
        method: 'PUT',
    });
}

export const activateUserApiService = async (id: number) => {
    return callApiBaseAsync(`${endpoint}/${id}/ativar`, {
        title: 'USER API - userApiService',
        method: 'PUT',
    });
}

export const searchUserApiService = async (data: any): Promise<datacore.FetchResponse<any>> => {
    return callApiBaseAsync(`${endpoint}/search`, {
        title: 'API - userApiService',
        method: 'POST',
        body: {
            nome: data?.nome,
            perfil: data?.perfil,
            situacao: data?.situacao
        }
    });
}
