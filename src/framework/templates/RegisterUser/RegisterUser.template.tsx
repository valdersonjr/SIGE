import React from 'react';

import * as S from './RegisterUser.style';
import {Header, InputInLabel} from "@molecules";
import {Title} from "@atoms";
import {personalDataInputLabel} from "./RegisterUser.logic";

export const RegisterUser: React.FC = () => (
    <S.Container>
        <S.Header>
            <Header title="Novo Usuário" />
        </S.Header>
        <S.Body>
            <S.InputSection>
                <Title>Dados do Usuário</Title>
                <S.InputContainer>
                    {personalDataInputLabel.map((item) => (
                        <InputInLabel key={item.key} label={item.label} value="" placeholder="Digite aqui" onChange={() => console.log("fon")} />
                    ))}
                </S.InputContainer>
            </S.InputSection>
        </S.Body>
    </S.Container>
);
