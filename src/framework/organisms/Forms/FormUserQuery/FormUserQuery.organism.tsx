import React from 'react';

import * as S from './FormUserQuery.style';
import {Button, Title, VariantButtonEnum} from "@atoms";
import {InputInLabel} from "@molecules";
import {InputSelectInLabel} from "@molecules/Inputs/InputSelectInLabel/InputSelectInLabel.molecule";

export const FormUserQuery: React.FC = () => (
    <S.Form>
        <Title size={20}>Encontra Usuário</Title>
        <Title size={18}>Filtrar por:</Title>
        <S.InputContainer>
            <InputInLabel label="Nome" onChange={() => console.log("Name")} value="Junin" />
            <InputSelectInLabel label="Perfil" onChange={() => console.log('perfil')}
                options={[{value: 'TEACHER', label: 'Professor'}, {value: 'STUDENT', label: 'Aluno'}]}
            />
            <InputSelectInLabel label="Situação" onChange={() => console.log('situação')}
                                options={[{value: 'ACTIVE', label: 'Ativado'}, {value: 'INACTIVE', label: 'Desativado'}]}
            />
            <S.ClearButton>
                <Button label="Limpar filtro" type="reset" justifyText="center" variant={VariantButtonEnum.PRIMARY_TRANSPARENT} />
            </S.ClearButton>
            <S.SearchButton>
                <Button label="Aplicar" type="submit" justifyText="center" variant={VariantButtonEnum.SECONDARY_TRANSPARENT} />
            </S.SearchButton>
        </S.InputContainer>
    </S.Form >
);
