import React from "react"
import { Select } from "~/framework/atoms";

import { CardProps } from "./Card.interface";

import * as S from './Card.style';

export const Card: React.FC<CardProps> = ({ label, value }) => {
    return (
        <S.Container>
            <S.Header>
                <S.HeaderTitle>{label}</S.HeaderTitle>
                <Select />
            </S.Header>
            <S.Value>{value}</S.Value>
        </S.Container>
    )
}