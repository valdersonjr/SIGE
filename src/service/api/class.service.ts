import {educationDataProps, finantialDataProps} from "@templates/NewClass/NewClass.interface";
import { datacore } from "~/models";
import {callApiBaseAsync} from "@service/api/_base";
import {getCleanCurrencyValue} from "~/utils";

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

export const createClassApiService = async (educationData:educationDataProps, financialData:finantialDataProps): Promise<datacore.FetchResponse<string>> => {
    return callApiBaseAsync(endpoint,  {
        title: 'API - classApiService',
        method: 'POST',
        body: {
            periodo_turma_id: educationData.period,
            ensino: educationData.education,
            descricao: educationData.name,
            valor_mensalidade: financialData.montlyFee ? getCleanCurrencyValue(financialData.montlyFee) : 0,
            valor_refeicao: financialData.mealValue ? getCleanCurrencyValue(financialData.mealValue) : 0,
            valor_hora_extra: financialData.extraHourValue ? getCleanCurrencyValue(financialData.extraHourValue) : 0,
            valor_projeto_nutricional: financialData.nutritionalProjectValue ? getCleanCurrencyValue(financialData.nutritionalProjectValue) : 0,
            valor_material_didatico: financialData.didacticMaterialValue ? getCleanCurrencyValue(financialData.didacticMaterialValue) : 0,
            valor_material_pedagogico: financialData.pedagogicalMaterialValue ? getCleanCurrencyValue(financialData.pedagogicalMaterialValue) : 0,
            ativo: true
        }
    });
}

export const putClassApiService = async (id: number, data: any) => {
    return callApiBaseAsync(`${endpoint}/${id}`, {
        title: 'API - classApiService',
        method: 'PUT',
        body: {...data}
    });
}

export const deleteClassApiService = async (id :number): Promise<datacore.FetchResponse<string>> => {
    return callApiBaseAsync(`${endpoint}/${id}`,  {
        title: 'API - classApiService',
        method: 'DELETE',
    });
}
