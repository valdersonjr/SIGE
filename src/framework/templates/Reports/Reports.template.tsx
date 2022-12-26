import React, {useState} from 'react';

import * as S from './Reports.style';
import {Banner} from "@molecules";
import {ReportsPageBannerIcon} from "@atoms/Icons/ReportsPageBanner.icon";
import {Button, Title, VariantButtonEnum} from "@atoms";

import {reports} from './Reports.logic';
import DownloadStudentReport from "@organisms/Modals/Reports/DownloadStudentReport/DownloadStudentReport.organism";
import {
    DownloadStudentReportDataModal
} from "@templates/Reports/ReportsDataModalContent/DownloadStudentReportContent/DownloadStudentReportDataModal.content";

export const Reports: React.FC = () => {
    const [downloadStudentReportModalState, setDownloadStudentReportModalState] = useState(false);

    return (
        <S.Container>
            {downloadStudentReportModalState ? <DownloadStudentReport title="Baixar relatórios de alunos" modalState={downloadStudentReportModalState} setModalState={setDownloadStudentReportModalState}><DownloadStudentReportDataModal /></DownloadStudentReport> : <></>}
            <Banner Icon={<ReportsPageBannerIcon />} type="reports" title='Relatórios' text="Veja os relatórios vinculados a sua escola" />
            <S.Body>
                {reports.map(it => (
                    <S.Block>
                        <S.BlockTitle>
                            <Title>{it.name}</Title>
                            <S.ButtonTitleContainer>
                                <Button label="Baixar Relatório" type="button" variant={VariantButtonEnum.PRIMARY}
                                    onClick={() => setDownloadStudentReportModalState(true)}/>
                            </S.ButtonTitleContainer>
                        </S.BlockTitle>
                        <S.BlockBody>
                            <S.BlockBodyDivisor>
                                <S.ButtonBodyContainer>
                                    <Button label="Aplicar filtro" type="button" variant={VariantButtonEnum.SECONDARY_TRANSPARENT} />
                                </S.ButtonBodyContainer>
                                <S.ButtonBodyContainer>
                                    <Button label="Limpar filtro" type="button" variant={VariantButtonEnum.PRIMARY_TRANSPARENT} />
                                </S.ButtonBodyContainer>
                            </S.BlockBodyDivisor>
                            <S.BlockBodyDivisor>
                                <S.ButtonBodyContainer>
                                    <Button label="Visualizar relatório" type="button" variant={VariantButtonEnum.SECONDARY} />
                                </S.ButtonBodyContainer>
                            </S.BlockBodyDivisor>
                        </S.BlockBody>
                    </S.Block>
                ))}
            </S.Body>
        </S.Container>
    );
};
