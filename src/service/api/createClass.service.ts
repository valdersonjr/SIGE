import { educationDataProps, finantialDataProps } from "~/framework/templates/NewClass/NewClass.interface";
import { datacore } from "~/models";
import { getCleanCurrencyValue } from "~/utils";
import { callApiBaseAsync } from "./_base";

const endpoint = '/turma';

export const createClassApiService = async (educationData:educationDataProps, fincancialData:finantialDataProps): Promise<datacore.FetchResponse<string>> => {
    return callApiBaseAsync(endpoint,  {
        title: 'CLASS API - classApiService',
        method: 'POST',
        body: {
            periodo_turma_id: educationData.period,
            ensino: educationData.education,
            descricao: educationData.name,
            valor_mensalidade: fincancialData.montlyFee ? getCleanCurrencyValue(fincancialData.montlyFee) : 0,
            valor_refeicao: fincancialData.mealValue ? getCleanCurrencyValue(fincancialData.mealValue) : 0,
            valor_hora_extra: fincancialData.extraHourValue ? getCleanCurrencyValue(fincancialData.extraHourValue) : 0,
            valor_projeto_nutricional: fincancialData.nutritionalProjectValue ? getCleanCurrencyValue(fincancialData.nutritionalProjectValue) : 0,
            valor_material_didatico: fincancialData.didacticMaterialValue ? getCleanCurrencyValue(fincancialData.didacticMaterialValue) : 0,
            valor_material_pedagogico: fincancialData.pedagogicalMaterialValue ? getCleanCurrencyValue(fincancialData.pedagogicalMaterialValue) : 0,
            ativo: true
        }
    });
}