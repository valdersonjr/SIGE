import React from "react";

import { SelectInLabelProps } from "./SelectInLabel.interface";
import * as S from './SelectInLabel.style';

export const SelectInLabel:React.FC<SelectInLabelProps> = ({label}) => {
    return(
        <S.Container>
            <S.Label>{label}</S.Label>
            <S.Select />
        </S.Container>
    )
}