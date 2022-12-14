import React from "react";

import { BannerProps } from "./Banner.interface";

import { Button, VariantButtonEnum } from "~/framework/atoms";


import * as S from './Banner.style';

export const Banner: React.FC<BannerProps> = ({ Icon, buttonLabel, title, text, onButtonClick, type }) => {

    return (
        <S.Container type={type} >
            <S.MainContentContainer>
                <S.BannerIconContainer>{Icon}</S.BannerIconContainer>
                <S.TextContainer>
                    <S.Title>{title}</S.Title>
                    <S.Text>{text}</S.Text>
                </S.TextContainer>
            </S.MainContentContainer>
            {buttonLabel ?
                <S.ButtonContainer>
                    <Button label={buttonLabel} type="button" justifyText="center" variant={VariantButtonEnum.PRIMARY} onClick={onButtonClick} />
                </S.ButtonContainer> : <></>
            }
        </S.Container>)
}
