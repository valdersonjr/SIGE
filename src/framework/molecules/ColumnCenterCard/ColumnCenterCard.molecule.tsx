import React from "react";
import { GlowingCircle, Title } from "~/framework/atoms";
import { theme } from "~/theme";

import { ColumnCenterCardProps } from "./ColumnCenterCard.interface";

import * as S from './ColumnCenterCard.style';

export const ColumnCenterCard:React.FC<ColumnCenterCardProps> = ({ label, value, active, variant }) => {
    return(
        <S.Container type={`${variant ? variant : "" }`} >
            <S.HeaderContainer>
                {active ? <GlowingCircle type="Ativo" /> : ""}
                <S.HeaderLabel style={{ "color": `${ variant ? S.color[variant] : `${theme.palette.dark.shade}` }` }} >{label}</S.HeaderLabel>
            </S.HeaderContainer>
            <Title size={40} color={active ? "#36D75E" : variant ? S.color[variant] : ""}>{value}</Title>
        </S.Container>
    )
}