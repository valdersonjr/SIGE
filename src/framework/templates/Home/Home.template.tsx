import React from 'react';

import { BarChaart } from '~/framework/atoms';
import { HomePageBanner } from '~/framework/atoms/Icons';

import { Banner, Card } from '~/framework/molecules';

import { cardsData, classesData, regData } from './Home.logic';

import * as S from "./Home.style";

export const Home: React.FC = () => {

    return (
        <S.Container>
            <Banner type="home" Icon={<HomePageBanner />} title='Plataforma que Simplifica a vida!' text="Faça uma busca minuciosa e encontre seu aluno com muito mais simplicidade." />
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
                        <Card key={item.key} label={item.label} value={item.value} />
                    ))}
                    <S.BirthdaysOfMonth>teste</S.BirthdaysOfMonth>
                </S.CardsContainer>
                <S.ClassText>Turmas</S.ClassText>
                <S.ClassCards>
                    {classesData.map((item) => (
                        <Card key={item.key} label={item.label} value={item.value} />
                    ))}
                </S.ClassCards>
            </S.RegistrationsContainer>
        </S.Container>
    )
}