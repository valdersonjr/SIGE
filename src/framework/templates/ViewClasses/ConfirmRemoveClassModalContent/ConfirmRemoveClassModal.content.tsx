import React from 'react';
import * as S from './ConfirmRemoveClassModal.style';

export const ConfirmRemoveClassContent: React.FC = () => (
    <S.Container>
        <S.ModalTitle>Atenção!</S.ModalTitle>
        <S.ModalSubtitle>Tem certeza que deseja deletar esse item?</S.ModalSubtitle>
    </S.Container>
);
