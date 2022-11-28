import React from "react";

import { BannerProps } from "./Banner.interface";

import { Button, VariantButtonEnum } from "~/framework/atoms";

import { HomePageBanner } from "~/framework/atoms/Icons";


import * as S from './Banner.style';

export const Banner: React.FC<BannerProps> = ({ buttonLabel, title, text, hasButton, onButtonClick }) => {

    return (
        <S.Container>
            <S.BannerIconContainer>
                <HomePageBanner />
            </S.BannerIconContainer>
            <S.TextContainer>
                <S.Title>{title}</S.Title>
                <S.Text>{text}</S.Text>
            </S.TextContainer>
            <S.ButtonContainer>
                <Button label={buttonLabel} type="button" variant={VariantButtonEnum.PRIMARY} onClick={onButtonClick} />
            </S.ButtonContainer>
        </S.Container>)
}