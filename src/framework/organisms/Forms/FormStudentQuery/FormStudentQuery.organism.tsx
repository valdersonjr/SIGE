import React from "react";

import { Button, Title, VariantButtonEnum } from "~/framework/atoms";

import { InputInLabel } from "~/framework/molecules";

import * as S from './FormStudentQuery.style';

export const FormStudentQuery: React.FC = () => {
    return (
        <S.Form>
            <Title size={20} >Encontre seu aluno</Title>
            <S.InputContainer>
                <InputInLabel label="Nome do Aluno" onChange={() => console.log("tteste")} value="Junin" />
                <InputInLabel label="Nome do Aluno" onChange={() => console.log("tteste")} value="Junin" />
                <S.ClearButton>
                    <Button label="Limpar filtro" type="reset" justifyText="center" variant={VariantButtonEnum.PRIMARY_TRANSPARENT} />
                </S.ClearButton>
                <S.SearchButton>
                    <Button label="Buscar" type="submit" justifyText="center" variant={VariantButtonEnum.SECONDARY_TRANSPARENT} />
                </S.SearchButton>
            </S.InputContainer>
            <Title size={18}>Filtrar por:</Title>
            <S.InputContainer>
                <InputInLabel label="Turma" onChange={() => console.log("tteste")} value="Junin" />
                <InputInLabel label="Nome do Aluno" onChange={() => console.log("tteste")} value="Junin" />
                <S.ClearButton>
                    <Button label="Limpar filtro" type="reset" justifyText="center" variant={VariantButtonEnum.PRIMARY_TRANSPARENT} />
                </S.ClearButton>
                <S.SearchButton>
                    <Button label="Buscar" type="submit" justifyText="center" variant={VariantButtonEnum.SECONDARY_TRANSPARENT} />
                </S.SearchButton>
            </S.InputContainer>
        </S.Form >
    )
}
