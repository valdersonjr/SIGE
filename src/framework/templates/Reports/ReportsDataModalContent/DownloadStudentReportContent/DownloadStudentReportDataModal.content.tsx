import React from 'react';

import * as S from './DownloadStudentReportDataModal.style';

export const DownloadStudentReportDataModal: React.FC = () => {
    return (
        <S.Container>
            <S.ModalTitle>Atenção!</S.ModalTitle>
            <S.ModalSubtitle>Existem filtros aplicados no seu relatório deseja baixar mesmo assim?</S.ModalSubtitle>
            <S.ModalBottomTitle>Caso desejar prosseguir com os filtros aplicados apenas cliquem em ”Baixar”. Caso desejar limpar os filtros clique em ”Baixar sem Filtros”</S.ModalBottomTitle>
        </S.Container>
    );
}
