import React from 'react';
import Switch from "react-switch";
import { EyeIcon, ThrashIcon } from '~/framework/atoms/Icons';
import { ActionIconsProps } from './ActionIcons.interface';
import { theme } from "~/theme";

import * as S from './ActionIcons.style';

export const ActionIcons: React.FC<ActionIconsProps> = ({ onEyeClick, onSwitchClick, onThrashClick, switchValue = false }) => {
    return (
        <S.Container>
            <S.Button flag="trash" onClick={onThrashClick} >
                <ThrashIcon />
            </S.Button>
            <S.Button flag="eye" onClick={onEyeClick}>
                <EyeIcon />
            </S.Button>
            <S.Button flag="switch" onClick={onSwitchClick} style={{display: 'flex', alignItems: 'center'}}>
                <Switch onChange={() => onSwitchClick} checked={switchValue}
                        onColor={theme.palette.primary.base} offColor={theme.palette.medium.shade}
                        uncheckedIcon={false} checkedIcon={false}
                        height={25} handleDiameter={15}
                />
            </S.Button>
        </S.Container>
    )
}
