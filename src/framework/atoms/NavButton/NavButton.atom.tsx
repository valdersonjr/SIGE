import React from "react";
import * as S from "./NavButton.style";
import {NavButtonProps} from "@atoms/NavButton/NavButton.interface";

const NavButton: React.FC<NavButtonProps> = ({
    onClick,
    label,
    disabled,
    leftIcon,
    variant,
    selected,
    ...props
}) => (
    <S.Button {...props} type="button" disabled={disabled} onClick={onClick} variant={variant} selected={selected}>
        {leftIcon && <S.LeftIconContainer>{leftIcon}</S.LeftIconContainer>}
        {label.trim().length > 0 && <S.Label>{label}</S.Label>}
    </S.Button>
);

export {NavButton};
