import React from 'react';

import * as S from './RegisterUser.style';
import {Header, InputInLabel} from "@molecules";
import {Title} from "@atoms";

export const RegisterUser: React.FC = () => (
    <S.Container>
        <S.Header>
            <Header title="Novo Usuário" />
        </S.Header>
        <S.Body>
            <S.InputSection>
                <Title>Dados do Usuário</Title>
                <S.InputContainer>
                    <InputInLabel label="Nome do Usuário" value="" placeholder="Digite aqui" onChange={() => console.log("fon")} />
                    <InputInLabel label="Perfil" value="" placeholder="Digite aqui" onChange={() => console.log("fon")} />
                </S.InputContainer>
                <S.InputContainer>
                    <InputInLabel label="Email" value="" placeholder="Digite aqui" onChange={() => console.log("fon")} />
                    <InputInLabel label="Telefone" value="" placeholder="Digite aqui" onChange={() => console.log("fon")} />
                </S.InputContainer>
                <S.InputContainer>
                    <S.DescInfoContainer>
                        Descrição
                        <S.DescInfoInput placeholder="Digite aqui..." />
                    </S.DescInfoContainer>
                </S.InputContainer>
            </S.InputSection>
        </S.Body>
    </S.Container>
);
