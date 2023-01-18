import React, { useEffect, useState } from 'react';

import { NewClassProps } from "@templates/NewClass/NewClass.interface";

import { Button, SelectInLabel, Title, VariantButtonEnum } from "@atoms";
import { Header, InputInLabel } from "@molecules";

import { getCleanCurrencyValue } from '~/utils';

import { periodOption } from './NewClass.logic';
import * as S from './NewClass.style';
import {ensinoOptions} from "~/utils/ensino-options";

export const NewClass: React.FC<NewClassProps> = ({ handleSubmit }) => {
    const [classData, setClassData] = useState({
        education: "",
        name: "",
        period: -1,
    });

    const [financialData, setFinancialData] = useState({
        montlyFee: "",
        mealValue: "",
        extraHourValue: "",
        nutritionalProjectValue: "",
        didacticMaterialValue: "",
        pedagogicalMaterialValue: "",
        totalValue: "",
    });

    useEffect(() => {
        let totalValue = getCleanCurrencyValue(financialData.montlyFee) + getCleanCurrencyValue(financialData.mealValue) + getCleanCurrencyValue(financialData.extraHourValue) + getCleanCurrencyValue(financialData.nutritionalProjectValue) + getCleanCurrencyValue(financialData.didacticMaterialValue) + getCleanCurrencyValue(financialData.pedagogicalMaterialValue);
        totalValue = Math.round(totalValue * 100) / 100;

        let stringTotalValue = String(totalValue);
        stringTotalValue = stringTotalValue.replace(".", ",");

        setFinancialData({ ...financialData, totalValue: stringTotalValue })
    }, [financialData.montlyFee, financialData.mealValue, financialData.extraHourValue, financialData.nutritionalProjectValue, financialData.didacticMaterialValue, financialData.pedagogicalMaterialValue]);

    const handleReset = () => {
        // setClassData({
        //     education: "",
        //     name: "",
        //     period: "",
        // });
        // setFinancialData({
        //     montlyFee: "",
        //     mealValue: "",
        //     extraHourValue: "",
        //     nutritionalProjectValue: "",
        //     didacticMaterialValue: "",
        //     pedagogicalMaterialValue: "",
        //     totalValue: "",
        // });
    }

    return (
        <S.Container>
            <S.Header>
                <Header title="Nova Turma" />
            </S.Header>
            <S.Body>
                <S.InputSection>
                    <Title>Dados da Turma</Title>
                    <S.InputContainer>
                        <SelectInLabel label="Ensino" options={ensinoOptions} onChange={(e: any) => setClassData({ ...classData, education: e.value })} />
                        <InputInLabel required label="Nome" value={classData.name} placeholder="Digite aqui..." onChange={(e) => setClassData({ ...classData, name: e })} />
                        <SelectInLabel label="Período" options={periodOption} onChange={(e: any) => setClassData({ ...classData, period: e.value })} />
                    </S.InputContainer>
                </S.InputSection>
                <S.InputSection>
                    <Title>Dados Financeiros</Title>
                    <S.InputContainer>
                        <InputInLabel type="currency" label="Valor mensalidade" value={financialData.montlyFee} placeholder="R$" onChange={(value) => setFinancialData({ ...financialData, montlyFee: value })} />
                        <InputInLabel type="currency" label="Valor refeição" value={financialData.mealValue} placeholder="R$" onChange={(value) => setFinancialData({ ...financialData, mealValue: value })} />
                        <InputInLabel type="currency" label="Valor hora extra" value={financialData.extraHourValue} placeholder="R$" onChange={(value) => setFinancialData({ ...financialData, extraHourValue: value })} />
                    </S.InputContainer>
                    <S.InputContainer>
                        <InputInLabel type="currency" label="Valor projeto nutricional" value={financialData.nutritionalProjectValue} placeholder="R$" onChange={(value) => setFinancialData({ ...financialData, nutritionalProjectValue: value })} />
                        <InputInLabel type="currency" label="Valor material didático" value={financialData.didacticMaterialValue} placeholder="R$" onChange={(value) => setFinancialData({ ...financialData, didacticMaterialValue: value })} />
                        <InputInLabel type="currency" label="Valor material pedagógico" value={financialData.pedagogicalMaterialValue} placeholder="R$" onChange={(value) => setFinancialData({ ...financialData, pedagogicalMaterialValue: value })} />
                    </S.InputContainer>
                    <S.InputContainer>
                        <InputInLabel label="Valor total" disabled={true} value={`R$ ${financialData.totalValue}`} placeholder="R$" onChange={(value) => setFinancialData({ ...financialData, totalValue: value })} />
                    </S.InputContainer>
                </S.InputSection>
                <div style={{ "display": "flex", "flexDirection": "row", "gap": "14px" }}>
                    <Button label="Criar turma" variant={VariantButtonEnum.SECONDARY} justifyText="center" onClick={(event) => handleSubmit ? handleSubmit(event, classData, financialData) : ""} />
                    <Button label="Resetar" variant={VariantButtonEnum.PRIMARY} justifyText="center" onClick={handleReset} />
                </div>
            </S.Body>
        </S.Container>
    );
}
