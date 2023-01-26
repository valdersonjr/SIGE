import React, { useEffect, useState } from "react";

import { Button, Title, VariantButtonEnum } from "~/framework/atoms";

import { InputInLabel } from "~/framework/molecules";
import { InputSelectInLabel } from "@molecules/Inputs/InputSelectInLabel/InputSelectInLabel.molecule";

import { FormStudentQueryProps } from "./FormStudentQuery.interface";

import * as S from './FormStudentQuery.style';
import { classesOptions, statusOptions } from "./FormStudentQuery.logic";
import { getPeriodsApiService } from "~/service/api";
import { ResponseClassPeriod } from "~/models/datacore";

export const FormStudentQuery: React.FC<FormStudentQueryProps> = ({ filters, setFilters }) => {
    const [periodOptions, setPeriodOptions] = useState<{value:string, label:string}[]>([]);
    const [inputData, setInputData] = useState({
        name: "",
        registration: "",
        period: "",
        class: "",
        status: ""
    });
    
    useEffect(() => {
        getPeriodsApiService().then((response:any) => {
            let periods:{value:string, label:string}[] = [{value: "", label: ""}];

            if(!response.message){
                response.data.forEach((elements:ResponseClassPeriod) => {
                    periods.push({value: elements.descricao, label: elements.descricao});
                })
            }
            else {
                console.log(response.message);
            }
            setPeriodOptions(periods);
        });

    },[]);


    const handleOnChange = (event: string, type:string) => {
        setInputData({...inputData, [type]: event});
    }

    const handleReset1 = () => {
        filters && setFilters && setFilters({
            name: "",
            registration: "",
            period: filters.period,
            class: filters.class,
            status: filters.status
        });
        setInputData({
            name: "",
            registration: "",
            period: inputData.period,
            class: inputData.class,
            status: inputData.status
        });
    }

    const handleReset2 = () => {
        filters && setFilters && setFilters({
            name: filters.name,
            registration: filters.registration,
            period: "",
            class: "",
            status: ""
        });
        setInputData({
            name: inputData.name,
            registration: inputData.registration,
            period: "",
            class: "",
            status: ""
        });
    }

    const handleOnSubmit = (event:React.SyntheticEvent) => {
        event.preventDefault();
        setFilters && setFilters(inputData);
    }

    return (
        <S.Form>
            <Title size={20}>Encontre seu aluno</Title>
            <S.InputContainer>
            <InputInLabel label="Nome do Aluno" onChange={(e) => handleOnChange(e, "name")} placeholder="Digite aqui..." />
            <InputInLabel label="Matrícula" onChange={(e) => handleOnChange(e, "registration")} placeholder="Digite aqui..." />
                <S.ClearButton>
                    <Button onClick={handleReset1} label="Limpar" type="reset" justifyText="center" variant={VariantButtonEnum.PRIMARY_TRANSPARENT} />
                </S.ClearButton>
                <S.SearchButton>
                    <Button onClick={handleOnSubmit} label="Buscar" type="submit" justifyText="center" variant={VariantButtonEnum.SECONDARY_TRANSPARENT} />
                </S.SearchButton>
            </S.InputContainer>
            <Title size={18}>Filtrar por:</Title>
            <S.InputContainer>
                <InputSelectInLabel label="Período" onChange={(e:any) => handleOnChange(e.value, "period")} options={periodOptions} />
                <InputSelectInLabel label="Turma" onChange={(e:any) => handleOnChange(e.value, "class")} options={classesOptions} />
                <InputSelectInLabel label="Situação" onChange={(e:any) => handleOnChange(e.value, "status")} options={statusOptions} />
                <S.ClearButton>
                    <Button onClick={handleReset2} label="Limpar" type="reset" justifyText="center" variant={VariantButtonEnum.PRIMARY_TRANSPARENT} />
                </S.ClearButton>
                <S.SearchButton>
                    <Button onClick={handleOnSubmit} label="Buscar" type="submit" justifyText="center" variant={VariantButtonEnum.SECONDARY_TRANSPARENT} />
                </S.SearchButton>
            </S.InputContainer>
        </S.Form >
    )
}
