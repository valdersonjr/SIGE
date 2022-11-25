import React from 'react';
import { PeopleIcon } from '~/framework/atoms/Icons';

import { SideBarSections } from '~/framework/molecules';

import * as S from "./SideBar.style";

export const SideBar: React.FC = () => {
    return (
        <S.container>
            <PeopleIcon />
            <SideBarSections />
        </S.container>
    )
}