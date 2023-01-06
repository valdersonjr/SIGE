import React, { useState } from "react";

import {useNavigate} from "react-router-dom";

import { Button, SelectInLabel, Title, VariantButtonEnum } from "~/framework/atoms";
import { Header } from "~/framework/molecules";
import { ClassesTable } from "~/framework/organisms";

import { ClassFilter } from "~/models/dataview";

import * as S from './ViewClasses.style';

export const ViewClasses: React.FC = () => {
    const navigate = useNavigate();

    const [classFilter, setclassFilter] = useState("");
    const [periodFilter, setPeriodFilter] = useState("");
    const [scheduleFilter, setScheduleFilter] = useState("");
    const [statusFilter, setStatusFilter] = useState("");

    const [filters, setFilters] = useState<ClassFilter>({
        class: "",
        period: "",
        schedule: "",
        status: ""
    });

    const handleFilterChange = (select: any) => {       
        if(select.name === "Período"){
            setPeriodFilter(select.value);
        }
        else if(select.name === "Horário"){
            setScheduleFilter(select.value);
        }
        else if(select.name === "Turma"){
            setclassFilter(select.value);
        }
        else if(select.name === "Situação"){
            setStatusFilter(select.value);
        }
    }

    const handleOnSubmit = () => {
        setFilters({
            class: classFilter,
            period: periodFilter,
            schedule: scheduleFilter,
            status: statusFilter
        });
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
                    <SelectInLabel onChange={handleFilterChange} options={[{value:"", label:""}, {value: 'Jardim I', label: 'Jardim I'}, {value: 'Jardim II', label: 'Jardim II'}]} label="Turma" />
                    <SelectInLabel onChange={handleFilterChange} options={[{value:"", label:""}, {value: 'Manhã', label: 'Manhã'}, {value: 'Tarde', label: 'Tarde'}]} label="Período" />
                    <SelectInLabel onChange={handleFilterChange} options={[{value:"", label:""}, {value: '08:00 - 12:00', label: '08:00 - 12:00'}, {value: '03:00 - 12:00', label: '01:00 - 12:00'}]} label="Horário" />
                    <SelectInLabel onChange={handleFilterChange} options={[{value:"", label:""}, {value: 'Ativo', label: 'Ativo'}, {value: 'Inativo', label: 'Inativo'}]} label="Situação" />
                    <S.ClearButton>
                        <Button onClick={handleReset} label="Limpar filtro" type="reset" justifyText="center" variant={VariantButtonEnum.PRIMARY_TRANSPARENT} />
                    </S.ClearButton>
                    <S.SearchButton>
                        <Button onClick={handleOnSubmit} label="Aplicar" type="submit" justifyText="center" variant={VariantButtonEnum.SECONDARY_TRANSPARENT} />
                    </S.SearchButton>
                </S.FilterContainer>
            </S.FindClassContainer>
            <ClassesTable filters={filters} />
        </S.Container>
    )
}
