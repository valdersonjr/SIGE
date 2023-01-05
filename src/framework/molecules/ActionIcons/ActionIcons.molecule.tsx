import React from 'react';

import { EyeIcon, SwitchOnIcon, ThrashIcon } from '~/framework/atoms/Icons';
import { ActionIconsProps } from './ActionIcons.interface';

import * as S from './ActionIcons.style';

export const ActionIcons: React.FC<ActionIconsProps> = ({ onEyeClick, onSwitchClick, onThrashClick }) => {
    return (
        <S.Container>
            <S.Button flag="trash" onClick={onThrashClick} >
                <ThrashIcon />
            </S.Button>
            <S.Button flag="eye" onClick={onEyeClick}>
                <EyeIcon />
            </S.Button>
            <S.Button flag="switch" onClick={onSwitchClick} >
                <SwitchOnIcon />
            </S.Button>
        </S.Container>
    )
}