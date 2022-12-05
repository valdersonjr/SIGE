import React from "react";
import { useNavigate } from "react-router-dom";

import { Title } from "~/framework/atoms";
import { ChevronLeftCircle } from "~/framework/atoms/Icons";
import { InputInLabel } from "~/framework/molecules";

import { RegisterStudentProps } from "./RegisterStudent.interface";
import { financeDataInputLabel, medicalDataInputLabel, personalDataInputLabel } from "./RegisterStudent.logic";

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
                <S.InputSection>
                    <Title>Dados Pessoais do Aluno</Title>
                    <S.InputContainer>
                        {personalDataInputLabel.map((item) => (
                            <InputInLabel key={item.key} label={item.label} value="" placeholder="Digite aqui" onChange={() => console.log("fon")} />
                        ))}
                    </S.InputContainer>
                </S.InputSection>
                <S.InputSection>
                    <Title>Dados Financeiros</Title>
                    <S.InputContainer>
                        {financeDataInputLabel.map((item) => (
                            <InputInLabel key={item.key} label={item.label} value="" placeholder="Digite aqui" onChange={() => console.log("fon")} />
                        ))}
                    </S.InputContainer>
                </S.InputSection>
                <S.InputSection>
                    <Title>Dados Médicos</Title>
                    <S.InputContainer>
                        {medicalDataInputLabel.map((item) => (
                            <InputInLabel key={item.key} label={item.label} value="" placeholder="Digite aqui" onChange={() => console.log("fon")} />
                        ))}
                    </S.InputContainer>
                </S.InputSection>
                <S.InputSection>
                    <S.InputContainer>
                        <S.MedicalInfoContainer>
                            Informações sobre alergia, medicação, necessidades especiais
                            <S.MedicalInfoInput placeholder="Digite aqui..." />
                        </S.MedicalInfoContainer>
                    </S.InputContainer>
                </S.InputSection>
            </S.Body>
        </S.Container>
    )
}