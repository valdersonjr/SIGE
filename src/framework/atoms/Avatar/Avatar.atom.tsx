import React from 'react';
import { AvatarProps } from './Avatar.interface';

import * as S from './Avatar.style';

export const Avatar: React.FC<AvatarProps> = ({ src, alt }) => {
    return (
        <S.Avatar src={src} alt={alt} />
    )
}