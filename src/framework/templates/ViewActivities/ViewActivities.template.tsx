import React from 'react';

import * as S from './ViewActivities.style';
import {Header} from "@molecules";
import {Button, SelectInLabel, Title, VariantButtonEnum} from "@atoms";
import {ActivitiesTable} from "@organisms/ActivitiesTable/ActivitiesTable.organism";

export const ViewActivities: React.FC = () => {
    return (
        <S.Container>
            <Header title="Atividades" buttonText="Cadastrar Nova Atividade" onButtonClick={() => {}} />
            <S.FindClassContainer>
                <Title size={20}>Encontre Atividade</Title>
                <S.FilterContainer>
                    <SelectInLabel options={[]} label="Período" />
                    <SelectInLabel options={[]} label="Horário" />
                    <SelectInLabel options={[]} label="Situação" />
                    <S.ClearButton>
                        <Button label="Limpar filtro" type="reset" justifyText="center" variant={VariantButtonEnum.PRIMARY_TRANSPARENT} />
                    </S.ClearButton>
                    <S.SearchButton>
                        <Button label="Aplicar" type="submit" justifyText="center" variant={VariantButtonEnum.SECONDARY_TRANSPARENT} />
                    </S.SearchButton>
                </S.FilterContainer>
            </S.FindClassContainer>
            <ActivitiesTable />
        </S.Container>
    );
};
