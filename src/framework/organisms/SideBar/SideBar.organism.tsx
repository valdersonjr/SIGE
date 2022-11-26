import React from 'react';

import { theme } from '~/theme';

import { DashboardIcon } from '~/framework/atoms/Icons';

import { Navigation, AvatarCard } from '~/framework/molecules';

import * as S from "./SideBar.style";

export const SideBar: React.FC = () => {
    return (
        <S.Container>
            <S.SigeLogo src="/logo.svg" alt="Logo do SIGE" />
            <Navigation />
            <S.Footer>
                <AvatarCard />
                <S.Logout>
                    <DashboardIcon color={theme.palette.dark.tint} />
                    <S.Text>Sair</S.Text>
                </S.Logout>
            </S.Footer>
        </S.Container>
    )
}