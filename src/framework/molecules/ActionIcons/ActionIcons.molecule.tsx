import React from 'react';

import { EyeIcon, SwitchOnIcon, ThrashIcon } from '~/framework/atoms/Icons';

import * as S from './ActionIcons.style';

export const ActionIcons: React.FC = () => {
    return (
        <S.Container>
            <ThrashIcon />
            <EyeIcon />
            <SwitchOnIcon />
        </S.Container>
    )
}