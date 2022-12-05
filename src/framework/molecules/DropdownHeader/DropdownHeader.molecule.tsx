import React from "react";

import { Title } from "~/framework/atoms";
import { ChevronUpCircle } from "~/framework/atoms/Icons";

import { DropdownCardProps } from "./DropdownHeader.interface";

import * as S from './DropdownHeader.style';

export const DropdownHeader: React.FC<DropdownCardProps> = ({ title }) => {
    return (
        <S.Container>
            <Title size={20}>{title}</Title>
            <ChevronUpCircle />
        </S.Container>
    )
}