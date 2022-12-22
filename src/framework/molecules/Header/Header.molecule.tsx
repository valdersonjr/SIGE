import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Title, VariantButtonEnum } from "~/framework/atoms";
import { ChevronLeftCircle } from "~/framework/atoms/Icons";
import { HeaderProps } from "./Header.interface";

import * as S from './Header.style';

export const Header: React.FC<HeaderProps> = ({ title, onButtonClick, buttonText }) => {
    const navigate = useNavigate();

    return (
        <S.Container>
            <S.Button onClick={() => navigate(-1)}>
                <ChevronLeftCircle />
            </S.Button>
            <Title>{title}</Title>
            {onButtonClick ?
                <S.EditDataButton onClick={onButtonClick}>
                    <Button label={buttonText} variant={VariantButtonEnum.SECONDARY} />
                </S.EditDataButton> : <></>}
        </S.Container>
    )
}