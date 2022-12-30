import React from "react";

import { SelectInLabelProps } from "./SelectInLabel.interface";
import * as S from './SelectInLabel.style';

export const SelectInLabel:React.FC<SelectInLabelProps> = ({label, onChange= () => {}, options}) => {
    const handleChange = (value: string) => {
        onChange(value);
    };

    return(
        <S.Container>
            <S.Label>{label}</S.Label>
            <S.Select onChange={() => handleChange}>
                {options.map((it, i) => (
                    <option key={i} value={it.value}>{it.label}</option>
                ))}
            </S.Select>
        </S.Container>
    )
}
