import React from 'react';

import * as S from './ViewRegistrations.style';
import {Header, InputInLabel} from "@molecules";
import {Button, SelectInLabel, Title, VariantButtonEnum} from "@atoms";
import {RegistrationsTable} from "@organisms/RegistrationsTable/RegistrationsTable.organism";

export const ViewRegistrations: React.FC = () => {
    return (
        <S.Container>
            <Header title="Matrículas" buttonText="Nova Matrícula" onButtonClick={() => console.log("register new registration")} />
            <S.FindClassContainer>
                <Title size={20}>Encontre Atividade</Title>
                <S.FilterContainer>
                    <InputInLabel label="Matrícula" value="" onChange={() => {}} />
                    <InputInLabel label="Nome do Aluno" value="" onChange={() => {}} />
                    <SelectInLabel options={[]} label="Ano de Ingresso" />
                    <SelectInLabel options={[]} label="Período de Ingresso" />
                    <S.ClearButton>
                        <Button label="Limpar filtro" type="reset" justifyText="center" variant={VariantButtonEnum.PRIMARY_TRANSPARENT} />
                    </S.ClearButton>
                    <S.SearchButton>
                        <Button label="Aplicar" type="submit" justifyText="center" variant={VariantButtonEnum.SECONDARY_TRANSPARENT} />
                    </S.SearchButton>
                </S.FilterContainer>
            </S.FindClassContainer>
            <RegistrationsTable />
        </S.Container>
    );
};
