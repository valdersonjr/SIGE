import {createClassDataProps} from "@templates/NewClass/NewClass.interface";
import { datacore } from "~/models";
import {callApiBaseAsync} from "@service/api/_base";

const endpoint = '/turma';

export const getClassesApiService = async (): Promise<datacore.FetchResponse<datacore.ResponseClass[]>> => {
    return callApiBaseAsync(`${endpoint}`,  {
        title: 'API - classApiService',
        method: 'GET',
    });
}

export const getClassApiService = async (id:number): Promise<datacore.FetchResponse<datacore.ResponseClass>> => {
    return callApiBaseAsync(`${endpoint}/${id}`,  {
        title: 'API - classApiService',
        method: 'GET',
    });
}

export const createClassApiService = async (data: createClassDataProps): Promise<datacore.FetchResponse<string>> => {
    return callApiBaseAsync(endpoint,  {
        title: 'API - classApiService',
        method: 'POST',
        body: {
            periodo_turma_id: data.periodo,
            ensino: data.ensino,
            descricao: data.descricao,
            valor_mensalidade: data.mensalidade,
            valor_refeicao: data.refeicao,
            valor_hora_extra: data.horaExtra,
            valor_projeto_nutricional: data.nutricional,
            valor_material_didatico: data.didatico,
            valor_material_pedagogico: data.pedagogico,
            ativo: true
        }
    });
}

export const putClassApiService = async (id: number, data: any) => {
    return callApiBaseAsync(`${endpoint}/${id}`, {
        title: 'API - classApiService',
        method: 'PUT',
        body: {
            periodo_turma_id: data?.periodo_turma?.id,
            ensino: data?.ensino,
            descricao: data?.descricao,
            valor_mensalidade: data?.valor_mensalidade,
            valor_refeicao: data?.valor_refeicao,
            valor_hora_extra: data?.valor_hora_extra,
            valor_projeto_nutricional: data?.valor_projeto_nutricional,
            valor_material_didatico: data?.valor_material_didatico,
            valor_material_pedagogico: data?.valor_material_pedagogico,
            ativo: !data?.ativo
        }
    });
}

export const deleteClassApiService = async (id :number): Promise<datacore.FetchResponse<string>> => {
    return callApiBaseAsync(`${endpoint}/${id}`,  {
        title: 'API - classApiService',
        method: 'DELETE',
    });
}
