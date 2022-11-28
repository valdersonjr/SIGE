import React from 'react';

import { Banner } from '~/framework/molecules';

import * as S from "./Home.style";

export const Home: React.FC = () => {
    const handleClick = () => {
        console.log("Voce clicou no botao do banner");
    }

    return (
        <S.Container>
            <Banner title='Plataforma que Simplifica a vida!' text="Faça uma busca minuciosa e encontre seu aluno com muito mais simplicidade." buttonLabel="Novo Aluno" hasButton={true} onButtonClick={handleClick} />
            <S.RegistrationsContainer>
                <S.NewRegistrations>
                    <S.NewRegistrationsTitle>Novas Matrículas</S.NewRegistrationsTitle>
                </S.NewRegistrations>
            </S.RegistrationsContainer>
        </S.Container>
    )
}