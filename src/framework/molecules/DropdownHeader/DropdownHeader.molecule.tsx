import React from "react";

import { Title } from "~/framework/atoms";
import { ChevronDownCircle, ChevronUpCircle } from "~/framework/atoms/Icons";

import { DropdownCardProps } from "./DropdownHeader.interface";
import * as S from './DropdownHeader.style';

export const DropdownHeader: React.FC<DropdownCardProps> = ({ title, dropdownState, setDropdownState }) => {
    return (
        <S.Container>
            <Title size={20}>{title}</Title>
            <S.Icon onClick={() => setDropdownState(!dropdownState)}>
                {dropdownState ? <ChevronUpCircle /> : <ChevronDownCircle />}
            </S.Icon>
        </S.Container>
    )
}