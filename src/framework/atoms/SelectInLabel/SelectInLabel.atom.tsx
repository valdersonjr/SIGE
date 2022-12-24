import React from "react";

import { SelectInLabelProps } from "./SelectInLabel.interface";
import * as S from './SelectInLabel.style';

export const SelectInLabel:React.FC<SelectInLabelProps> = ({label, options}) => {
    return(
        <S.Container>
            <S.Label>{label}</S.Label>
            <S.Select>
                {options.map(it => (
                    <option value={it.value}>{it.label}</option>
                ))}
            </S.Select>
        </S.Container>
    )
}
