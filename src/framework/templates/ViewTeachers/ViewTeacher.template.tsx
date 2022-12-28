import React from 'react';

import * as S from './ViewTeachers.style';
import {Header, InputInLabel} from "@molecules";
import {Button, SelectInLabel, Title, VariantButtonEnum} from "@atoms";
import {TeachersTable} from "@organisms/TeachersTable/TeachersTable.organism";

export const ViewTeachers: React.FC = () => {
    return (
        <S.Container>
            <Header title="Professores" buttonText="Novo Professor" onButtonClick={() => console.log("register new teacher")} />
            <S.FindClassContainer>
                <Title size={20}>Encontrar Professor</Title>
                <S.FilterContainer>
                    <InputInLabel label="Nome Professor" value="" onChange={() => {}} />
                    <InputInLabel label="Turma Vinculada" value="" onChange={() => {}} />
                    <SelectInLabel options={[]} label="Período" />
                    <S.ClearButton>
                        <Button label="Limpar filtro" type="reset" justifyText="center" variant={VariantButtonEnum.PRIMARY_TRANSPARENT} />
                    </S.ClearButton>
                    <S.SearchButton>
                        <Button label="Aplicar" type="submit" justifyText="center" variant={VariantButtonEnum.SECONDARY_TRANSPARENT} />
                    </S.SearchButton>
                </S.FilterContainer>
            </S.FindClassContainer>
            <TeachersTable />
        </S.Container>
    );
};
