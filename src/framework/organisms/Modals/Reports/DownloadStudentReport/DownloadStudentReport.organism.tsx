import React from 'react';

import * as S from './DownloadStudentReport.style';
import {
    DownloadStudentReportProps
} from "./DownloadStudentReport.interface";
import {Header} from "@molecules";
import {Button, VariantButtonEnum} from "@atoms";

const DownloadStudentReport: React.FC<DownloadStudentReportProps> = ({ title, children, modalState, setModalState }) => (
    <S.Container>
        <S.Modal>
            <S.Header>
                <Header title={title} backButtonState={modalState} setBackButtonState={setModalState} />
            </S.Header>
            <S.InputsContainer>{children}</S.InputsContainer>
            <S.ButtonsContainer>
                <Button onClick={() => setModalState && modalState ? setModalState(!modalState) : <></> } label="Baixar sem filtros" justifyText="center" variant={VariantButtonEnum.PRIMARY_TRANSPARENT} />
                <Button label="Baixar" variant={VariantButtonEnum.SECONDARY} justifyText="center" />
            </S.ButtonsContainer>
        </S.Modal>
    </S.Container>
);

export default DownloadStudentReport;
