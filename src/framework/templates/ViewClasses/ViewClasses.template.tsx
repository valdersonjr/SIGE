import React, {useEffect, useState} from "react";

import {useNavigate} from "react-router-dom";

import { Button, SelectInLabel, Title, VariantButtonEnum } from "~/framework/atoms";
import {Header, InputInLabel} from "~/framework/molecules";
import { ClassesTable } from "~/framework/organisms";
import { ViewClassesProps } from "./ViewClasses.interface";
import { statusOptions } from "./ViewClasses.logic";
import {ensinoOptions} from "~/utils/ensino-options";

import * as S from './ViewClasses.style';

export const ViewClasses: React.FC<ViewClassesProps> = ({ classes, reload, setReload }) => {
    const navigate = useNavigate();

    const [filters, setFilters] = useState({
        ensino: "",
        descricao: "",
        status: ""
    });

    const handleFilterChange = (field: string, value: any) => {
        console.log('field', value);
        setFilters({...filters, [field]: value});
    }

    const handleOnSubmit = () => {
        console.log(filters);
    }

    const handleReset = () => {
        setFilters({
            ensino: "",
            descricao: "",
            status: ""
        });
    }

    useEffect(() => {
        handleOnSubmit();
    }, [filters]);

    return (
        <S.Container>
            <Header title="Turmas" buttonText="Cadastrar Nova Turma" onButtonClick={() => navigate('/gestao-escolar/nova-turma')} />
            <S.FindClassContainer>
                <Title size={20}>Encontre sua turma</Title>
                <S.FilterContainer>
                    <SelectInLabel selectedValue={filters.ensino} onChange={value => handleFilterChange('ensino', value)} options={ensinoOptions} label="Ensino" />
                    <InputInLabel value={filters.descricao} onChange={value => handleFilterChange('descricao', value)} label="Nome" />
                    <SelectInLabel selectedValue={filters.status} onChange={value => handleFilterChange('status', value)} options={statusOptions} label="Situação" />
                    <S.ClearButton>
                        <Button onClick={handleReset} label="Limpar" type="reset" justifyText="center" variant={VariantButtonEnum.PRIMARY_TRANSPARENT} />
                    </S.ClearButton>
                </S.FilterContainer>
            </S.FindClassContainer>
            <ClassesTable filters={filters} data={classes} reload={reload} setReload={setReload} />
        </S.Container>
    )
}
