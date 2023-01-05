import React from "react";

import { Button, Title, VariantButtonEnum } from "~/framework/atoms";
import { ChevronUp, ChevronDown } from "~/framework/atoms/Icons";


import { DropdownCardProps } from "./DropdownHeader.interface";
import * as S from './DropdownHeader.style';

export const DropdownHeader: React.FC<DropdownCardProps> = ({ title, dropdownState, setDropdownState, buttonText, onButtonClick }) => {
    return (
        <S.Container state={dropdownState} >
            <Title size={20}>{title}</Title>
            <div style={{"display":"flex", "flexDirection":"row", "gap": "10px"}}>
                {buttonText ? <Button label={buttonText} variant={VariantButtonEnum.SECONDARY} justifyText="center" onClick={onButtonClick} />  : <></>}
                <S.Icon onClick={() => setDropdownState(!dropdownState)}>
                    {dropdownState ? <ChevronUp /> : <ChevronDown />}
                </S.Icon>
            </div>
        </S.Container>
    )
}
