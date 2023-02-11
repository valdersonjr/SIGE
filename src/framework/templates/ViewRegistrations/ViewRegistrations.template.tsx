import React, {useEffect, useState} from 'react';
import * as S from './ViewRegistrations.style';
import {Header, InputInLabel} from "@molecules";
import {Button, SelectInLabel, Title, VariantButtonEnum} from "@atoms";
import {RegistrationsTable} from "@organisms/RegistrationsTable/RegistrationsTable.organism";
import {useNavigate} from "react-router-dom";
import {ViewRegistrationsProps} from "@templates/ViewRegistrations/ViewRegistrations.interface";
import {anoOptions} from "@templates/NewRegistration/NewRegistration.logic";
import {getClassesApiService} from "@service/api";

export const ViewRegistrations: React.FC<ViewRegistrationsProps> = ({registrations, reload, setReload, handleFilterChange, filters, clearFilters}) => {
    const navigate = useNavigate();
    const [classes, setClasses] = useState<any>([]);

    useEffect(() => {
        getClassesApiService()
            .then((response: any) => {
                const FORMATTED_DATA = response.data.map((it: any) => {return {label: it.descricao, value: it.id}});
                setClasses([{label: 'Selecione a turma', value: ''}, ...FORMATTED_DATA]);
            }).catch(error => console.error(error));
    }, []);

    return (
        <S.Container>
            <Header title="Matrículas" buttonText="Nova Matrícula" onButtonClick={() => navigate('/gestao-escolar/nova-matricula')} />
            <S.FindClassContainer>
                <Title size={20}>Encontre a matrícula</Title>
                <S.FilterContainer>
                    <InputInLabel label="Nome do Aluno" value={filters.nome} onChange={value => handleFilterChange('nome', value)} />
                    <SelectInLabel label="Ano de Ingresso" selectedValue={filters.ano} onChange={(v: any) => handleFilterChange('ano', v?.value)} options={anoOptions} />
                    <SelectInLabel label="Turma" selectedValue={filters.turma} onChange={(v: any) => handleFilterChange('turma', v?.value)} options={classes} />
                    <S.ClearButton>
                        <Button label="Limpar" type="reset" onClick={clearFilters}
                                justifyText="center" variant={VariantButtonEnum.PRIMARY_TRANSPARENT} />
                    </S.ClearButton>
                </S.FilterContainer>
            </S.FindClassContainer>
            <RegistrationsTable data={registrations} reload={reload} setReload={setReload} />
        </S.Container>
    );
};
