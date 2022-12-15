import React from "react";

import { GlowingCircleProps } from "./GlowingCircle.interface";

import * as S from './GlowingCircle.style';

export const GlowingCircle:React.FC<GlowingCircleProps> = ({ type }) => {
    return(
        <S.CssIcon flag={type} />
    )
}