import React from 'react';

import { Banner } from '~/framework/molecules';

import * as S from "./Home.style";

export const Home: React.FC = () => {
    return (
        <S.Container>
            <Banner />
        </S.Container>
    )
}