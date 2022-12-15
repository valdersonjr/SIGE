import React from "react";
import { GlowingCircle, Title } from "~/framework/atoms";

import { ColumnCenterCardProps } from "./ColumnCenterCard.interface";

import * as S from './ColumnCenterCard.style';

export const ColumnCenterCard:React.FC<ColumnCenterCardProps> = ({label, value, active}) => {
    return(
        <S.Container>
            <S.HeaderContainer>
                {active ? <GlowingCircle type="Ativo" /> : ""}
                <S.HeaderLabel>{label}</S.HeaderLabel>
            </S.HeaderContainer>
            <Title size={40} color={active ? "#36D75E" : ""} >{value}</Title>
        </S.Container>
    )
}