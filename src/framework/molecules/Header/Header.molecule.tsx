import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Title, VariantButtonEnum } from "~/framework/atoms";
import { ChevronLeftCircle } from "~/framework/atoms/Icons";
import { HeaderProps } from "./Header.interface";

import * as S from './Header.style';

export const Header: React.FC<HeaderProps> = ({ title, onButtonClick, buttonText, backButtonState, setBackButtonState, navigatePath }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if(setBackButtonState && backButtonState){
            setBackButtonState(!backButtonState);
        }
        else {
            if(navigatePath){
                navigate(navigatePath);
            }
            else {
                navigate(-1);
            }
        }
    }

    return (
        <S.Container>
            <S.Button onClick={handleClick}>
                <ChevronLeftCircle />
            </S.Button>
            <Title>{title}</Title>
            {onButtonClick ?
                <S.EditDataButton onClick={onButtonClick}>
                    <Button label={buttonText} variant={VariantButtonEnum.SECONDARY} justifyText="center" />
                </S.EditDataButton> : <></>}
        </S.Container>
    )
}
