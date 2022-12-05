import React from 'react';

import { EyeIcon, SwitchOnIcon, ThrashIcon } from '~/framework/atoms/Icons';
import { ActionIconsProps } from './ActionIcons.interface';

import * as S from './ActionIcons.style';

export const ActionIcons: React.FC<ActionIconsProps> = ({ onEyeClick, onSwitchClick, onThrashClick }) => {
    return (
        <S.Container>
            <S.Button>
                <ThrashIcon onClick={onThrashClick} />
            </S.Button>
            <S.Button onClick={onEyeClick}>
                <EyeIcon />
            </S.Button>
            <S.Button>
                <SwitchOnIcon onClick={onSwitchClick} />
            </S.Button>
        </S.Container>
    )
}