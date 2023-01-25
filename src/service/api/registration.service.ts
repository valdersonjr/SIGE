import {datacore} from "~/models"
import {callApiBaseAsync} from "./_base"

const endpoint = '/matricula';

export const getRegistrationsApiService = async (): Promise<datacore.FetchResponse<any>> => {
    return callApiBaseAsync(endpoint, {
        title: 'API - registrationApiService',
        method: 'GET'
    });
}

export const getRegistrationApiService = async (id: number): Promise<datacore.FetchResponse<any>> => {
    return callApiBaseAsync(`${endpoint}/${id}`, {
        title: 'API - registrationApiService',
        method: 'GET'
    });
}

export const createRegistrationApiService = async (data: any): Promise<datacore.FetchResponse<any>> => {
    return callApiBaseAsync(endpoint, {
        title: 'API - registrationApiService',
        method: 'GET',
        body: {
            turma_id: data?.turma_id,
            aluno_id: data?.aluno_id,
            ano: data?.ano,
            divulgacao_dados_autorizada: data?.divulgacao_dados_autorizada,
            divulgacao_imagem_rede: data?.divulgacao_imagem_rede,
            valor_matricula: data?.valor_matricula,
            data_inicio: data?.data_inicio,
            solicitou_lista: data?.solicitou_lista,
            forma_pagamento_parcelas: data?.forma_pagamento_parcelas,
            faz_recreacao: data?.faz_recreacao,
            optou_almoco: data?.optou_almoco,
            optou_jantar: data?.optou_jantar
        }
    });
}

export const searchRegistrationApiService = async (data: any): Promise<datacore.FetchResponse<any>> => {
    return callApiBaseAsync(`${endpoint}/search`, {
        title: 'API - registrationApiService',
        method: 'GET',
        body: {
            ano: data?.ano,
            nome: data?.nome,
            matricula: data?.matricula,
            periodo_turma: data?.periodo_turma,
            turma: data?.turma,
            situacao: data?.situacao
        }
    });
}

export const putRegistrationApiService = async (id: number, data: any): Promise<datacore.FetchResponse<any>> => {
    return callApiBaseAsync(`${endpoint}/${id}`, {
        title: 'API - registrationApiService',
        method: 'PUT',
        body: {
            turma_id: data?.turma_id,
            aluno_id: data?.aluno_id,
            ano: data?.ano,
            divulgacao_dados_autorizada: data?.divulgacao_dados_autorizada,
            divulgacao_imagem_rede: data?.divulgacao_imagem_rede,
            valor_matricula: data?.valor_matricula,
            data_inicio: data?.data_inicio,
            solicitou_lista: data?.solicitou_lista,
            forma_pagamento_parcelas: data?.forma_pagamento_parcelas,
            faz_recreacao: data?.faz_recreacao,
            optou_almoco: data?.optou_almoco,
            optou_jantar: data?.optou_jantar
        }
    });
}

export const deleteRegistrationApiService = async (id: number): Promise<datacore.FetchResponse<any>> => {
    return callApiBaseAsync(`${endpoint}/${id}`, {
        title: 'API - registrationApiService',
        method: 'DELETE'
    });
}
