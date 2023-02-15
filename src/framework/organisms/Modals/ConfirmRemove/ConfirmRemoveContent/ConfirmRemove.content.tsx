import React from 'react';
import * as S from './ConfirmRemove.content.style';
import {
    ConfirmRemoveContentProps
} from "@organisms/Modals/ConfirmRemove/ConfirmRemoveContent/ConfirmRemove.content.interface";

export const ConfirmRemoveContent: React.FC<ConfirmRemoveContentProps> = ({title, description}) => (
    <S.Container>
        <S.ModalTitle>{title}</S.ModalTitle>
        <S.ModalSubtitle>{description}</S.ModalSubtitle>
    </S.Container>
);
