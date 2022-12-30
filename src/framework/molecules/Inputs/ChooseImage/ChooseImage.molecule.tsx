import React from "react";
import {ChooseImageProps} from "@molecules/Inputs/ChooseImage/ChooseImage.interface";
import * as S from './ChooseImage.style';
import {InputImage} from "@atoms/InputImage/InputImage.atom";
import {ChooseImageIcon} from "@atoms/Icons/ChooseImage.icon";
import {theme} from "@theme";

export const ChooseImage: React.FC<ChooseImageProps> = ({
    onChange,
    value,
    style,
    label
}) => {

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        onChange(evt);
    };

    return (
        <S.Container>
            {!!value ? (
                <S.ImagePreview src={URL.createObjectURL(value)} alt="" />
            ) : (
                <React.Fragment>
                    <ChooseImageIcon color={theme.palette.medium.shade} />
                    <S.Label>{label}</S.Label>
                </React.Fragment>
            )}
            <InputImage onChange={handleChange} style={style} />
        </S.Container>
    );
}
