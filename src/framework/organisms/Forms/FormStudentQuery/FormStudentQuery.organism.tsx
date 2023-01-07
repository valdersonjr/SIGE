import React, { useState } from "react";

import { Button, Title, VariantButtonEnum } from "~/framework/atoms";

import { InputInLabel } from "~/framework/molecules";
import { InputSelectInLabel } from "@molecules/Inputs/InputSelectInLabel/InputSelectInLabel.molecule";

import { FormStudentQueryProps } from "./FormStudentQuery.interface";

import * as S from './FormStudentQuery.style';

const findStudentList = [{
    key: 0,
    label: "Nome do Aluno"
},
{
    key: 1,
    label: "Matrícula"
}];

const filtersList = [{
    key: 0,
    label: "Período",
},
{
    key: 1,
    label: "Turma",
},
{
    key: 2,
    label: "Situação",
}];

export const FormStudentQuery: React.FC<FormStudentQueryProps> = ({ filters, setFilters }) => {
    const [studentName, setStudentName] = useState("");
    const [studentRegistration, setStudentRegistration] = useState("");

    const [studentPeriod, setStudentPeriod] = useState("");
    const [studentClass, setStudentClass] = useState("");
    const [studentStatus, setStudentStudetStatus] = useState("");


    const handleFindStudentChange = (value: string, key: number) => {
        if (key === 0) {
            setStudentName(value);
        }
        if (key === 1) {
            setStudentRegistration(value);
        }
    }

    const handleFilterChange = (value: string) => {
        setStudentPeriod(value);
        setStudentClass(value);
        setStudentStudetStatus(value);
    }

    const handleFindStudentSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();


        if (setFilters && filters) {
            setFilters({
                name: studentName,
                registration: studentRegistration,
                period: filters.period,
                class: filters.class,
                situation: filters.situation
            });
            setStudentName("");
            setStudentRegistration("");
        }
    }

    const handleFilterSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (setFilters && filters) {
            setFilters({
                name: filters.name,
                registration: filters.registration,
                period: studentPeriod,
                class: studentClass,
                situation: studentStatus
            });

            setStudentPeriod("");
            setStudentClass("");
            setStudentStudetStatus("");
        }
    }

    return (
        <S.Form>
            <Title size={20}>Encontre seu aluno</Title>
            <S.InputContainer>
                {findStudentList.map((item) => {
                    let disabled = false;
                    let placeholder;

                    if (studentRegistration !== "") {
                        disabled = true;
                    }

                    if (item.key === 0) {
                        placeholder = "Digite o nome do aluno";
                    }
                    else {
                        placeholder = "Digite a matrícula do aluno";
                    }

                    return <InputInLabel label={item.label} onChange={(e) => handleFindStudentChange(e, item.key)} value={item.key === 0 ? studentName : studentRegistration} placeholder={placeholder} disabled={item.key !== 1 ? disabled : false} />
                })}
                <S.ClearButton>
                    <Button label="Limpar filtro" type="reset" justifyText="center" variant={VariantButtonEnum.PRIMARY_TRANSPARENT} />
                </S.ClearButton>
                <S.SearchButton>
                    <Button onClick={handleFindStudentSubmit} label="Buscar" type="submit" justifyText="center" variant={VariantButtonEnum.SECONDARY_TRANSPARENT} />
                </S.SearchButton>
            </S.InputContainer>
            <Title size={18}>Filtrar por:</Title>
            <S.InputContainer>
                {filtersList.map((item) => {
                    let disabled = false;

                    if (studentRegistration !== "") {
                        disabled = true;
                    }

                    return <InputSelectInLabel key={item.key} label={item.label} onChange={(e) => handleFilterChange(e)} options={[{ value: 'Professor', label: 'Professor' }, { value: 'Aluno', label: 'Aluno' }]} disabled={disabled} />
                })}
                <S.ClearButton>
                    <Button label="Limpar filtro" type="reset" justifyText="center" variant={VariantButtonEnum.PRIMARY_TRANSPARENT} />
                </S.ClearButton>
                <S.SearchButton>
                    <Button onClick={handleFilterSubmit} label="Buscar" type="submit" justifyText="center" variant={VariantButtonEnum.SECONDARY_TRANSPARENT} />
                </S.SearchButton>
            </S.InputContainer>
        </S.Form >
    )
}
