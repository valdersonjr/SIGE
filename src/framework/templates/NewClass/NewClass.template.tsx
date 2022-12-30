import React from 'react';
import * as S from './NewClass.style';
import {NewClassProps} from "@templates/NewClass/NewClass.interface";
import {Header, InputInLabel} from "@molecules";
import {Button, SelectInLabel, Title, VariantButtonEnum} from "@atoms";

export const NewClass: React.FC<NewClassProps> = () => {
    return (
        <S.Container>
            <S.Header>
                <Header title="Nova Turma" />
            </S.Header>
            <S.Body>
                <S.InputSection>
                    <Title>Dados da Turma</Title>
                    <S.InputContainer>
                        <SelectInLabel label="Ensino" options={[]} onChange={() => {}} />
                        <InputInLabel label="Nome" value="" placeholder="Digite aqui..." onChange={() => {}} />
                        <SelectInLabel label="Período" options={[]} onChange={() => {}} />
                    </S.InputContainer>
                </S.InputSection>
                <S.InputSection>
                    <Title>Dados Financeiros</Title>
                    <S.InputContainer>
                        <InputInLabel label="Valor mensalidade" value="" placeholder="R$" onChange={() => {}} />
                        <InputInLabel label="Valor refeição" value="" placeholder="R$" onChange={() => {}} />
                        <InputInLabel label="Valor hora extra" value="" placeholder="R$" onChange={() => {}} />
                    </S.InputContainer>
                    <S.InputContainer>
                        <InputInLabel label="Valor projeto nutricional" value="" placeholder="R$" onChange={() => {}} />
                        <InputInLabel label="Valor material didático" value="" placeholder="R$" onChange={() => {}} />
                        <InputInLabel label="Valor material pedagógico" value="" placeholder="R$" onChange={() => {}} />
                    </S.InputContainer>
                    <S.InputContainer>
                        <InputInLabel label="Valor total" disabled={true} value="" placeholder="R$" onChange={() => {}} />
                    </S.InputContainer>
                </S.InputSection>
                <Button label="Criar turma" variant={VariantButtonEnum.SECONDARY} justifyText="center"
                        onClick={() => {}} />
            </S.Body>
        </S.Container>
    );
}
