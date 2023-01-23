import React, {useEffect, useState} from "react";

import { InputInLabel } from "~/framework/molecules";
import {EditFinancialDataProps} from "@templates/ViewClass/EditFinancialDataModalContent/EditFinancialData.interface";

export const EditFinancialDataModal:React.FC<EditFinancialDataProps> = ({data, setData}) => {
    const [mensalidade, setMensalidade] = useState<number>(data?.valor_mensalidade);
    const [refeicao, setRefeicao] = useState<number>(data?.valor_refeicao);
    const [horaExtra, setHoraExtra] = useState<number>(data?.valor_hora_extra);
    const [nutricionista, setNutricionista] = useState<number>(data?.valor_projeto_nutricional);
    const [didatico, setDidatico] = useState<number>(data?.valor_material_didatico);
    const [pedagogico, setPedagogico] = useState<number>(data?.valor_material_pedagogico);

    useEffect(() => {
        if (!!mensalidade && !!refeicao && !!horaExtra && !!nutricionista && !!didatico && !!pedagogico) {
            setData({...data,
                valor_mensalidade: removeCurrencyPrefix(mensalidade),
                valor_refeicao: removeCurrencyPrefix(refeicao),
                valor_hora_extra: removeCurrencyPrefix(horaExtra),
                valor_projeto_nutricional: removeCurrencyPrefix(nutricionista),
                valor_material_didatico: removeCurrencyPrefix(didatico),
                valor_material_pedagogico: removeCurrencyPrefix(pedagogico)
            });
        }
    }, [mensalidade, refeicao, horaExtra, nutricionista, didatico, pedagogico]);

    const removeCurrencyPrefix = (value: string | number): number => {
        if (String(value).indexOf('R') !== 0) {
            return Number(value);
        }
        return Number(String(value).trim().slice(2));
    }

    return (
        <React.Fragment>
            <InputInLabel label={`Valor mensalidade - R$ ${data?.valor_mensalidade}`} type="currency" placeholder="R$"
                          onChange={setMensalidade} value={mensalidade} />
            <InputInLabel label={`Valor Refeição - R$ ${data?.valor_refeicao}`} type="currency" placeholder="R$"
                          onChange={setRefeicao} value={refeicao} />
            <InputInLabel label={`Valor hora extra - R$ ${data?.valor_hora_extra}`} type="currency" placeholder="R$"
                          onChange={setHoraExtra} value={horaExtra} />
            <InputInLabel label={`Valor Projeto nutricionista - R$ ${data?.valor_projeto_nutricional}`} type="currency" placeholder="R$"
                          onChange={setNutricionista} value={nutricionista} />
            <InputInLabel label={`Valor Material didático - R$ ${data?.valor_material_didatico}`} type="currency" placeholder="R$"
                          onChange={setDidatico} value={didatico} />
            <InputInLabel label={`Valor Material pedagógico - R$ ${data?.valor_material_pedagogico}`} type="currency" placeholder="R$"
                          onChange={setPedagogico} value={pedagogico} />
        </React.Fragment>
    );
}
