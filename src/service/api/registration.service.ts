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
        method: 'POST',
        body: {
            turma_id: data?.turma_id,
            aluno_id: data?.aluno_id,
            ano: data?.ano,
            divulgacao_dados_autorizada: data?.divulgacao_dados_autorizada,
            divulgacao_imagem_rede: data?.divulgacao_imagem_rede,
            valor_matricula: data?.valor_matricula,
            valor_mensalidade: data?.valor_mensalidade,
            valor_refeicao: data?.valor_refeicao,
            valor_hora_extra:  data?.valor_hora_extra,
            valor_projeto_nutricional: data?.valor_projeto_nutricional,
            valor_material_didatico: data?.valor_material_didatico,
            valor_material_pedagogico: data?.valor_material_pedagogico,
            data_inicio: data?.data_inicio,
            solicitou_lista: true,
            forma_pagamento_parcelas: data?.forma_pagamento_parcelas,
            optou_almoco: data?.optou_almoco,
            optou_jantar: data?.optou_jantar,
            atividades: data?.atividades
        }
    });
}

export const searchRegistrationApiService = async (data: any): Promise<datacore.FetchResponse<any>> => {
    return callApiBaseAsync(`${endpoint}/search`, {
        title: 'API - registrationApiService',
        method: 'POST',
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
            valor_mensalidade: data?.valor_mensalidade,
            valor_refeicao: data?.valor_refeicao,
            valor_hora_extra:  data?.valor_hora_extra,
            valor_projeto_nutricional: data?.valor_projeto_nutricional,
            valor_material_didatico: data?.valor_material_didatico,
            valor_material_pedagogico: data?.valor_material_pedagogico,
            data_inicio: data?.data_inicio,
            solicitou_lista: true,
            forma_pagamento_parcelas: data?.forma_pagamento_parcelas,
            optou_almoco: data?.optou_almoco,
            optou_jantar: data?.optou_jantar,
            atividades: data?.atividades
        }
    });
}

export const deleteRegistrationApiService = async (id: number): Promise<datacore.FetchResponse<any>> => {
    return callApiBaseAsync(`${endpoint}/${id}`, {
        title: 'API - registrationApiService',
        method: 'DELETE'
    });
}
