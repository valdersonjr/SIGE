import React from "react";
import * as S from "./Loading.style";
import HashLoader from "react-spinners/HashLoader";
import { theme } from '@theme';
import LoadingOrganism from "@organisms/Loading/Loading.organism.interface";

export const Loading: React.FC<LoadingOrganism> = ({height}) => (
    <S.Container style={height ? {height} : {height: '70vh'}} >
        <HashLoader
            color={theme.palette.primary.base}
            loading={true}
            size={38}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    </S.Container>
);
