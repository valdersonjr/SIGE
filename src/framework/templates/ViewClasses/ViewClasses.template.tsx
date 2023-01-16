import React, { useState } from "react";

import {useNavigate} from "react-router-dom";

import { Button, SelectInLabel, Title, VariantButtonEnum } from "~/framework/atoms";
import { Header } from "~/framework/molecules";
import { ClassesTable } from "~/framework/organisms";
import { ViewClassesProps } from "./ViewClasses.interface";
import { classOptions, getField, periodOptions, scheduleOptions, statusOptions } from "./ViewClasses.logic";

import * as S from './ViewClasses.style';

export const ViewClasses: React.FC<ViewClassesProps> = ({ classesList }) => {
    const navigate = useNavigate();

    const [filters, setFilters] = useState({
        class: "",
        period: "",
        schedule: "",
        status: ""
    });

    const handleFilterChange = (select: any) => {
        let field = getField(select.name);
        setFilters({ ...filters, [field]: select.value });
    }

    const handleOnSubmit = () => {
        console.log(filters);
    }

    const handleReset = () => {
        setFilters({
            class: "",
            period: "",
            schedule: "",
            status: ""
        });
    }

    return (
        <S.Container>
            <Header title="Turmas" buttonText="Cadastrar Nova Turma" onButtonClick={() => navigate('/gestao-escolar/nova-turma')} />
            <S.FindClassContainer>
                <Title size={20}>Encontre sua turma</Title>
                <S.FilterContainer>
                    <SelectInLabel selectedValue={filters.class} onChange={handleFilterChange} options={classOptions} label="Ensino" />
                    <SelectInLabel selectedValue={filters.period} onChange={handleFilterChange} options={periodOptions} label="Período" />
                    <SelectInLabel selectedValue={filters.schedule} onChange={handleFilterChange} options={scheduleOptions} label="Horário" />
                    <SelectInLabel selectedValue={filters.status} onChange={handleFilterChange} options={statusOptions} label="Situação" />
                    <S.ClearButton>
                        <Button onClick={handleReset} label="Limpar" type="reset" justifyText="center" variant={VariantButtonEnum.PRIMARY_TRANSPARENT} />
                    </S.ClearButton>
                    {/* <S.SearchButton>
                        <Button onClick={handleOnSubmit} label="Aplicar" type="submit" justifyText="center" variant={VariantButtonEnum.SECONDARY_TRANSPARENT} />
                    </S.SearchButton> */}
                </S.FilterContainer>
            </S.FindClassContainer>
            <ClassesTable filters={filters} data={classesList} />
        </S.Container>
    )
}
