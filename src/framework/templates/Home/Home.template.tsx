import React from 'react';

import { BarChaart } from '~/framework/atoms';

import { Banner, Card } from '~/framework/molecules';

import { cardsData, regData } from './Home.logic';

import * as S from "./Home.style";

export const Home: React.FC = () => {
    const handleClick = () => {
        console.log("Voce clicou no botao do banner");
    }

    return (
        <S.Container>
            <Banner title='Plataforma que Simplifica a vida!' text="Faça uma busca minuciosa e encontre seu aluno com muito mais simplicidade." buttonLabel="Novo Aluno" hasButton={true} onButtonClick={handleClick} />
            <S.RegistrationsContainer>
                <S.NewRegistrationsTitle>Novas Matrículas</S.NewRegistrationsTitle>
                <S.NewRegistrationsContainer>
                    <S.ChartContainer>
                        <BarChaart />
                    </S.ChartContainer>
                    <S.ChartCardsContainer>
                        {regData.map((item) => (
                            <Card key={item.key} label={item.label} value={item.value} />
                        ))}
                    </S.ChartCardsContainer>
                </S.NewRegistrationsContainer>
                <S.CardsContainer>
                    {cardsData.map((item) => (
                        <>
                            {/* <Card key={item.key} label={item.label} value={item.value} /> */}
                        </>
                    ))}
                </S.CardsContainer>
            </S.RegistrationsContainer>
        </S.Container>
    )
}