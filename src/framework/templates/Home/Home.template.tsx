import React from 'react';

import { BarChaart } from '~/framework/atoms';
import { HomePageBanner } from '~/framework/atoms/Icons';

import { Banner, Card } from '~/framework/molecules';

import { cardsDataRow1, cardsDataRow2, classesData, regData } from './Home.logic';

import * as S from "./Home.style";

export const Home: React.FC = () => {

    return (
        <S.Container>
            <Banner type="home" Icon={<HomePageBanner />} title='Plataforma que Simplifica a vida!' text="Faça uma busca minuciosa e encontre seu aluno com muito mais simplicidade." />
            <S.RegistrationsContainer>
                <S.PageTitles>Novas Matrículas</S.PageTitles>
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


                <S.CardsBody>
                    <S.CardsBlock>
                        {cardsDataRow1.map((item) => (
                            <Card key={item.key} label={item.label} value={item.value} />
                        ))}
                    </S.CardsBlock>
                    <S.CardsBirthBlock>
                        <div style={{"display":"flex", "flexDirection":"row", "justifyContent":"space-between", "gap":"20%"}}>
                            {cardsDataRow2.map((item) => (
                                <Card key={item.key} label={item.label} value={item.value} />
                            ))}
                        </div>
                        <S.BirthDayBanner >
                            <h2 style={{"textAlign":"center", "marginTop":"30px"}}>Banner</h2>
                        </S.BirthDayBanner>
                    </S.CardsBirthBlock>
                </S.CardsBody>


                <div style={{"marginTop": "20px"}}>
                    <S.PageTitles>Turmas</S.PageTitles>
                </div>
               
                <S.ClassCards>
                    {classesData.map((item) => (
                        <Card key={item.key} label={item.label} value={item.value} />
                    ))}
                </S.ClassCards>
            </S.RegistrationsContainer>
        </S.Container >
    )
}