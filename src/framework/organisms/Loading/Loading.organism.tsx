import React from "react";
import * as S from "./Loading.style";
import HashLoader from "react-spinners/HashLoader";
import { theme } from '@theme';

export const Loading: React.FC = () => (
    <S.Container>
        <HashLoader
            color={theme.palette.primary.base}
            loading={true}
            size={38}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    </S.Container>
);
