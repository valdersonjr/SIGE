import React, { useState } from 'react';

import * as S from './FormUserQuery.style';
import { Button, Title, VariantButtonEnum } from "@atoms";
import { InputInLabel } from "@molecules";
import { InputSelectInLabel } from "@molecules/Inputs/InputSelectInLabel/InputSelectInLabel.molecule";

import { FormUserQueyProps } from './FormUserQuery.interface';
import { profileOptions, statusOptions } from './FormUserQuery.logic';

export const FormUserQuery: React.FC<FormUserQueyProps> = ({ setFilters }) => {
    const [formData, setFormData] = useState({
        name: "",
        profile: "",
        status: ""
    });

    const handleFormDataChange = (e: string, type: string) => {
        setFormData({
            ...formData,
            [type]: e
        });
    }

    const handleFormSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        if (formData && setFilters) {
            setFilters(formData)
        }
    }

    const handleFilterReset = () => {
        if(setFilters){
            setFilters({
                name: "",
                profile: "",
                status: ""
            });
        }
    }

    return (
        <S.Form onSubmit={handleFormSubmit} >
            <Title size={20}>Encontra Usuário</Title>
            <Title size={18}>Filtrar por:</Title>
            <S.InputContainer>
                <InputInLabel name='testeee' label="Nome" onChange={(e) => handleFormDataChange(e, "name")} value={formData.name} />
                <InputSelectInLabel label="Perfil" onChange={(e:any) => handleFormDataChange(e.value, "profile")}
                    options={profileOptions}
                />
                <InputSelectInLabel label="Situação" onChange={(e:any) => handleFormDataChange(e.value, "status")}
                    options={statusOptions}
                />
                <S.ClearButton>
                    <Button label="Limpar filtro" type="reset" justifyText="center" onClick={handleFilterReset} variant={VariantButtonEnum.PRIMARY_TRANSPARENT} />
                </S.ClearButton>
                <S.SearchButton>
                    <Button label="Aplicar" type="submit" justifyText="center" variant={VariantButtonEnum.SECONDARY_TRANSPARENT} />
                </S.SearchButton>
            </S.InputContainer>
        </S.Form >
    )
};
