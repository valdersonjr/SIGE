import React from "react";
import { Title } from "~/framework/atoms";
import { ChevronLeftCircle } from "~/framework/atoms/Icons";
import { RegisterStudentProps } from "./RegisterStudent.interface";

import * as S from './RegisterStudent.style';

export const RegisterStudent: React.FC = () => {
    return (
        <S.Container>
            <S.Header>
                <S.Button>
                    <ChevronLeftCircle />
                </S.Button>
                <Title>Novo Aluno</Title>
            </S.Header>
        </S.Container>
    )
}