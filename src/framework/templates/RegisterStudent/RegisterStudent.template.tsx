import React from "react";
import { useNavigate } from "react-router-dom";

import { Title } from "~/framework/atoms";
import { ChevronLeftCircle } from "~/framework/atoms/Icons";
import { InputInLabel } from "~/framework/molecules";

import { RegisterStudentProps } from "./RegisterStudent.interface";
import { financeDataInputLabel, personalDataInputLabel } from "./RegisterStudent.logic";

import * as S from './RegisterStudent.style';

export const RegisterStudent: React.FC = () => {
    const navigate = useNavigate();
    return (
        <S.Container>
            <S.Header>
                <S.Button onClick={() => navigate(-1)}>
                    <ChevronLeftCircle />
                </S.Button>
                <Title>Novo Aluno</Title>
            </S.Header>
            <S.Body>
                <S.ImageInputContainer>
                    a imagem vai por aq
                </S.ImageInputContainer>
                <Title>Dados Pessoais do Aluno</Title>
                <S.InputContainer>
                    {personalDataInputLabel.map((item) => (
                        <InputInLabel label={item.label} value="" placeholder="Digite aqui" onChange={() => console.log("fon")} />
                    ))}
                </S.InputContainer>
                <Title>Dados Financeiros</Title>
                <S.InputContainer>
                    {financeDataInputLabel.map((item) => (
                        <InputInLabel label={item.label} value="" placeholder="Digite aqui" onChange={() => console.log("fon")} />
                    ))}
                </S.InputContainer>
            </S.Body>
        </S.Container>
    )
}