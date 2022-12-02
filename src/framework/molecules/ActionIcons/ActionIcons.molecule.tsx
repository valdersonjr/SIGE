import React from 'react';

import { EyeIcon, SwitchOnIcon, ThrashIcon } from '~/framework/atoms/Icons';

import * as S from './ActionIcons.style';

export const ActionIcons: React.FC = () => {
    return (
        <S.Container>
            <S.Button>
                <ThrashIcon />
            </S.Button>
            <S.Button>
                <EyeIcon />
            </S.Button>
            <S.Button>
                <SwitchOnIcon />
            </S.Button>
        </S.Container>
    )
}