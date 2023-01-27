import { datacore } from "~/models"
import { IRegisterUser } from "~/models/dataview";
import { callApiBaseAsync } from "./_base"

const endpoint = '/usuario';

export const getAllUsersApiService = async (): Promise<datacore.FetchResponse<datacore.FetchUserResponse[]>> => { 
    return callApiBaseAsync(`${endpoint}`,  {
        title: 'USER API - userApiService',
        method: 'GET',
    });
}

export const getUserByIdApiService = async (id:number): Promise<datacore.FetchResponse<datacore.FetchUserResponse>> => { 
    return callApiBaseAsync(`${endpoint}/${id}`, {
        title: 'USER API - userApiService',
        method: 'GET',
    });
}

export const deleteUserApiService = async (id:number): Promise<datacore.FetchResponse<string>> => { 
    return callApiBaseAsync(`${endpoint}/${id}`,  {
        title: 'USER API - userApiService',
        method: 'DELETE',
    });
}

export const updateUserApiService = async (user:any): Promise<datacore.FetchResponse<any>> => { 
    return callApiBaseAsync(`${endpoint}/${user.id}`,  {
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

export const registerUserApiService = async (user:IRegisterUser): Promise<datacore.FetchResponse<any>> => { 
    return callApiBaseAsync(`${endpoint}`,  {
        title: 'USER API - userApiService',
        method: 'POST',
        body: {
            nome: user.name,
            email: user.email,
            senha: user.password,
            telefone: user.phone,
            ativo: true,
            perfis: user.profile
        }
    });
}

export const inactivateUserApiService = async (id:number) => {
    return callApiBaseAsync(`${endpoint}/${id}/inativar`,  {
        title: 'USER API - userApiService',
        method: 'PUT',
    });
}

export const activateUserApiService = async (id:number) => {
    return callApiBaseAsync(`${endpoint}/${id}/ativar`,  {
        title: 'USER API - userApiService',
        method: 'PUT',
    });
}