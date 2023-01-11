import React from "react";

import { SelectInLabelProps } from "./SelectInLabel.interface";
import * as S from './SelectInLabel.style';

export const SelectInLabel: React.FC<SelectInLabelProps> = ({ label, onChange = () => { }, options, disabled, selectedValue }) => {
    const handleChange = (value: any) => {
        onChange(value);
    };

    return (
        <S.Container>
            <S.Label>{label}</S.Label>
            <S.Select value={selectedValue === "" ? selectedValue : undefined} disabled={disabled} name={label} onChange={(event) => handleChange(event.target)}>
                {options.map((it, i) => (
                    <option key={i} value={it.value}>{it.label}</option>
                ))}
            </S.Select>
        </S.Container>
    )
}
