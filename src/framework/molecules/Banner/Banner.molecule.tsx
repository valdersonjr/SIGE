import React from "react";

import * as S from './Banner.style';

export const Banner: React.FC = () => {
    return (
        <S.Container>
            <img width="100px" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png" alt="temporario" />
            <S.TextContainer>
                <S.Title>Plataforma que Simplifica a vida!</S.Title>
                <S.Text>Faça uma busca minuciosa e encontre seu aluno com muito mais simplicidade. </S.Text>
            </S.TextContainer>
        </S.Container>)
}