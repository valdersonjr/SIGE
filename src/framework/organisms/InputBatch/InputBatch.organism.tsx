import React from "react";

import { Title } from "~/framework/atoms";

import { InputBatchProps } from "./InputBatch.interface";

import * as S from './InputBatch.style';
import {InputInLabel} from "@molecules";


export const InputBatch: React.FC<InputBatchProps> = ({ labelList }) => {
    return (
        <S.Container>
            <Title>Dados Pessoais do Aluno</Title>
            <S.InputContainer>
                {labelList.map((item) => (
                    <InputInLabel label={item.data} value="" placeholder="Digite aqui" onChange={() => {}} />
                ))}
            </S.InputContainer>
        </S.Container>
    )
}
