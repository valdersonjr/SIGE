import React from 'react';
import NotFoundOrganism from "@organisms/NotFound/NotFound.organism.interface";
import * as S from './NotFound.style';

export const NotFound: React.FC<NotFoundOrganism> = ({description}) => (
    <S.Container>
        <S.Description>{description}</S.Description>
    </S.Container>
);
