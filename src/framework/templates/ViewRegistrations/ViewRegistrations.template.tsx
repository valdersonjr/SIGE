import React, {useState} from 'react';
import * as S from './ViewRegistrations.style';
import {Header, InputInLabel} from "@molecules";
import {Button, SelectInLabel, Title, VariantButtonEnum} from "@atoms";
import {RegistrationsTable} from "@organisms/RegistrationsTable/RegistrationsTable.organism";
import {useNavigate} from "react-router-dom";
import {ViewRegistrationsProps} from "@templates/ViewRegistrations/ViewRegistrations.interface";

export const ViewRegistrations: React.FC<ViewRegistrationsProps> = ({registrations, reload, setReload}) => {
    const navigate = useNavigate();

    const [filters, setFilters] = useState({
        ano: '',
        nome: '',
        matricula: '',
        periodo_turma: '',
        situacao: ''
    });

    const handleFilterChange = (field: string, value: any) => {
        setFilters({...filters, [field]: value});
    }

    return (
        <S.Container>
            <Header title="Matrículas" buttonText="Nova Matrícula" onButtonClick={() => navigate('/gestao-escolar/nova-matricula')} />
            <S.FindClassContainer>
                <Title size={20}>Encontre Atividade</Title>
                <S.FilterContainer>
                    <InputInLabel label="Matrícula" value={filters.matricula} onChange={value => handleFilterChange('register', value)} />
                    <InputInLabel label="Nome do Aluno" value={filters.nome} onChange={value => handleFilterChange('studentName', value)} />
                    <SelectInLabel label="Ano de Ingresso" selectedValue={filters.ano} onChange={value => handleFilterChange('registerYear', value)} options={[]} />
                    <S.ClearButton>
                        <Button label="Limpar" type="reset" justifyText="center" variant={VariantButtonEnum.PRIMARY_TRANSPARENT} />
                    </S.ClearButton>
                </S.FilterContainer>
            </S.FindClassContainer>
            <RegistrationsTable filters={filters} data={registrations} reload={reload} setReload={setReload} />
        </S.Container>
    );
};
