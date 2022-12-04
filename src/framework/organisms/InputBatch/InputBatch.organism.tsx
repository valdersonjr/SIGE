import React from "react";

import { Title } from "~/framework/atoms";

import { InputBatchProps } from "./InputBatch.interface";

import * as S from './InputBatch.style';


export const InputBatch: React.FC<InputBatchProps> = ({ labelList }) => {
    return (
        <S.Container>
            <Title>Dados Pessoais do Aluno</Title>
            <S.InputContainer>
                {personalDataInputLabel.map((item) => (
                    <InputInLabel label={item.label} value="" placeholder="Digite aqui" onChange={() => console.log("fon")} />
                ))}
            </S.InputContainer>
        </S.Container>
    )
}