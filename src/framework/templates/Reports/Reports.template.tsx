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
import StudentsFilter from "@organisms/Modals/Reports/StudentsFilter/StudentsFilter.organism";
import {
    StudentsFilterDataModal
} from "@templates/Reports/ReportsDataModalContent/StudentsFilterContent/StudentsFilterDataModal.content";
import BirthdaysFilter from "@organisms/Modals/Reports/BirthdaysFilter/Birthdays.organism";
import {
    BirthdaysFilterDataModal
} from "@templates/Reports/ReportsDataModalContent/BirthdaysFilterContent/BirthdaysFilterDataModal.content";
import PhoneContactFilter from "@organisms/Modals/Reports/PhoneContactFilter/PhoneContactFilter.organism";
import {
    PhoneContactFilterDataModal
} from "@templates/Reports/ReportsDataModalContent/PhoneContactFilterContent/PhoneContactDataModal.content";

export const Reports: React.FC = () => {
    const [downloadStudentReportModalState, setDownloadStudentReportModalState] = useState(false);
    const [studentsFilterModalState, setStudentsFilterModalState] = useState(false);
    const [birthdaysFilterModalState, setBirthdaysFilterModalState] = useState(false);
    const [activitiesFilterModalState, setActivitiesFilterModalState] = useState(false);
    const [billetsFilterModalState, setBilletsFilterModalState] = useState(false);
    const [phoneContactFilterModalState, setPhoneContactFilterModalState] = useState(false);

    const handleFilterModal = (key: string) => {
        switch (key) {
            case 'students': setStudentsFilterModalState(true);
                break;
            case 'birthdays': setBirthdaysFilterModalState(true);
                break;
            case 'activities': setActivitiesFilterModalState(true);
                break;
            case 'billet': setBilletsFilterModalState(true);
                break;
            case 'phone_contact': setPhoneContactFilterModalState(true);
                break;
            case 'phone_birthday_contact':
                break;
            case 'periods':
                break;
            case 'image_permissions':
                break;
            default:
                break;
        }
    }

    return (
        <S.Container>
            {downloadStudentReportModalState ? <DownloadStudentReport title="Baixar relatórios de alunos" modalState={downloadStudentReportModalState} setModalState={setDownloadStudentReportModalState}><DownloadStudentReportDataModal /></DownloadStudentReport> : <></>}
            {studentsFilterModalState ? <StudentsFilter title="Aplicar filtro" modalState={studentsFilterModalState} setModalState={setStudentsFilterModalState}><StudentsFilterDataModal /></StudentsFilter> : <></>}
            {birthdaysFilterModalState ? <BirthdaysFilter title="Aplicar filtro" modalState={birthdaysFilterModalState} setModalState={setBirthdaysFilterModalState}><BirthdaysFilterDataModal /></BirthdaysFilter> : <></>}
            {activitiesFilterModalState ? <StudentsFilter title="Aplicar filtro" modalState={activitiesFilterModalState} setModalState={setActivitiesFilterModalState}><StudentsFilterDataModal /></StudentsFilter> : <></>}
            {billetsFilterModalState ? <StudentsFilter title="Aplicar filtro" modalState={billetsFilterModalState} setModalState={setBilletsFilterModalState}><StudentsFilterDataModal /></StudentsFilter> : <></>}
            {phoneContactFilterModalState ? <PhoneContactFilter title="Aplicar filtro" modalState={phoneContactFilterModalState} setModalState={setPhoneContactFilterModalState}><PhoneContactFilterDataModal /></PhoneContactFilter> : <></>}


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
                                    <Button label="Aplicar filtro" type="button" variant={VariantButtonEnum.SECONDARY_TRANSPARENT}
                                        onClick={() => handleFilterModal(it.key)}/>
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
