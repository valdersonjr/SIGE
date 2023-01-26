import React, {useState} from 'react';
import * as S from './ViewRegistrations.style';
import {Header, InputInLabel} from "@molecules";
import {Button, SelectInLabel, Title, VariantButtonEnum} from "@atoms";
import {RegistrationsTable} from "@organisms/RegistrationsTable/RegistrationsTable.organism";
import {useNavigate} from "react-router-dom";
import {ViewRegistrationsProps} from "@templates/ViewRegistrations/ViewRegistrations.interface";

export const ViewRegistrations: React.FC<ViewRegistrationsProps> = ({registrations}) => {
    const navigate = useNavigate();

    const [filters, setFilters] = useState({
        register: '',
        studentName: '',
        registerYear: '',
        status: ''
    });

    const handleFilterChange = (field: string, value: any) => {
        setFilters({...filters, [field]: value});
    }

    return (
        <S.Container>
            <Header title="Matrículas" buttonText="Nova Matrícula" onButtonClick={() => navigate('/gestao-escolar/nova-matricula')} />
            <S.FindClassContainer>
                <Title size={20}>Encontre a matrícula</Title>
                <S.FilterContainer>
                    <InputInLabel label="Matrícula" value={filters.register} onChange={value => handleFilterChange('register', value)} />
                    <InputInLabel label="Nome do Aluno" value={filters.studentName} onChange={value => handleFilterChange('studentName', value)} />
                    <SelectInLabel label="Ano de Ingresso" selectedValue={filters.registerYear} onChange={value => handleFilterChange('registerYear', value)} options={[]} />
                    <S.ClearButton>
                        <Button label="Limpar filtro" type="reset" justifyText="center" variant={VariantButtonEnum.PRIMARY_TRANSPARENT} />
                    </S.ClearButton>
                    <S.SearchButton>
                        <Button label="Aplicar" type="submit" justifyText="center" variant={VariantButtonEnum.SECONDARY_TRANSPARENT} />
                    </S.SearchButton>
                </S.FilterContainer>
            </S.FindClassContainer>
            <RegistrationsTable filters={filters} data={registrations} />
        </S.Container>
    );
};
