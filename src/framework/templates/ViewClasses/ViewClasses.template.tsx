import React from "react";

import { Button, SelectInLabel, Title, VariantButtonEnum } from "~/framework/atoms";
import { Header } from "~/framework/molecules";
import { ClassesTable } from "~/framework/organisms";


import * as S from './ViewClasses.style';

export const ViewClasses: React.FC = () => {
    return (
        <S.Container>
            <Header title="Turmas" buttonText="Cadastrar Nova Turma" onButtonClick={() => console.log("cadastrar nova turma")} />
            <S.FindClassContainer>
                <Title size={20}>Encontre sua turma</Title>
                <S.FilterContainer>
                    <SelectInLabel label="Período" />
                    <SelectInLabel label="Horário" />
                    <SelectInLabel label="Turma" />
                    <SelectInLabel label="Situação" />
                    <S.ButtonContainer>
                        <S.ButtonResize>
                            <Button label="Limpar Filtro" variant={VariantButtonEnum.PRIMARY_TRANSPARENT} />
                        </S.ButtonResize>
                        <S.ButtonResize>
                            <Button label="Aplicar" variant={VariantButtonEnum.SECONDARY} />
                        </S.ButtonResize>
                    </S.ButtonContainer>
                </S.FilterContainer>
            </S.FindClassContainer>
            <ClassesTable />
        </S.Container>
    )
}