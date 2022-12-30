import React from 'react';
import {InputImageProps} from "@atoms/InputImage/InputImage.interface";
import * as S from './InputImage.style';

export const InputImage: React.FC<InputImageProps> = ({onChange, style }) => {
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        onChange(evt);
    };

    return (
        <S.Input
            accept="image/*"
            onChange={handleChange}
            style={style}
        />
    );
}
