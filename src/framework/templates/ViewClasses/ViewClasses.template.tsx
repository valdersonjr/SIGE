import React from "react";

import { Button, SelectInLabel, Title, VariantButtonEnum } from "~/framework/atoms";
import { Header } from "~/framework/molecules";
import { ClassesTable } from "~/framework/organisms";

import * as S from './ViewClasses.style';

export const ViewClasses: React.FC = () => {
    return (
        <S.Container>
            <Header title="Turmas" buttonText="Cadastrar Nova Turma" onButtonClick={() => {}} />
            <S.FindClassContainer>
                <Title size={20}>Encontre sua turma</Title>
                <S.FilterContainer>
                    <SelectInLabel options={[]} label="Período" />
                    <SelectInLabel options={[]} label="Horário" />
                    <SelectInLabel options={[]} label="Turma" />
                    <SelectInLabel options={[]} label="Situação" />
                    <S.ClearButton>
                        <Button label="Limpar filtro" type="reset" justifyText="center" variant={VariantButtonEnum.PRIMARY_TRANSPARENT} />
                    </S.ClearButton>
                    <S.SearchButton>
                        <Button label="Aplicar" type="submit" justifyText="center" variant={VariantButtonEnum.SECONDARY_TRANSPARENT} />
                    </S.SearchButton>
                </S.FilterContainer>
            </S.FindClassContainer>
            <ClassesTable />
        </S.Container>
    )
}
