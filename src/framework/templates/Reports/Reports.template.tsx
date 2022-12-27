import React, {useState} from 'react';

import * as S from './Reports.style';
import { theme } from '~/theme';
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
import PeriodsFilter from "@organisms/Modals/Reports/PeriodsFilter/PeriodsFilter.organism";
import {
    PeriodsFilterDataModal
} from "@templates/Reports/ReportsDataModalContent/PeriodsFilterContent/PeriodsDataModal.content";
import ImagePermissionsFilter from "@organisms/Modals/Reports/ImagePermissionsFilter/ImagePermissionsFilter.organism";
import {
    ImagePermissionsFilterDataModal
} from "@templates/Reports/ReportsDataModalContent/ImagePermissionsFilterContent/ImagePermissionsDataModal.content";
import {DownloadIcon} from "@atoms/Icons/Download.icon";
import {SimpleEyeIcon} from "@atoms/Icons/SimpleEye.icon";

export const Reports: React.FC = () => {
    const [downloadStudentReportModalState, setDownloadStudentReportModalState] = useState(false);
    const [studentsFilterModalState, setStudentsFilterModalState] = useState(false);
    const [birthdaysFilterModalState, setBirthdaysFilterModalState] = useState(false);
    const [activitiesFilterModalState, setActivitiesFilterModalState] = useState(false);
    const [billetsFilterModalState, setBilletsFilterModalState] = useState(false);
    const [phoneContactFilterModalState, setPhoneContactFilterModalState] = useState(false);
    const [phoneContactBirthdaysFilterModalState, setPhoneContactBirthdaysFilterModalState] = useState(false);
    const [periodsFilterModalState, setPeriodsFilterModalState] = useState(false);
    const [imagePermissionsFilterModalState, setImagePermissionsFilterModalState] = useState(false);

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
            case 'phone_birthday_contact': setPhoneContactBirthdaysFilterModalState(true);
                break;
            case 'periods': setPeriodsFilterModalState(true);
                break;
            case 'image_permissions': setImagePermissionsFilterModalState(true);
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
            {phoneContactBirthdaysFilterModalState ? <PhoneContactFilter title="Aplicar filtro" modalState={phoneContactBirthdaysFilterModalState} setModalState={setPhoneContactBirthdaysFilterModalState}><PhoneContactFilterDataModal /></PhoneContactFilter> : <></>}
            {periodsFilterModalState ? <PeriodsFilter title="Aplicar filtro" modalState={periodsFilterModalState} setModalState={setPeriodsFilterModalState}><PeriodsFilterDataModal /></PeriodsFilter> : <></>}
            {imagePermissionsFilterModalState ? <ImagePermissionsFilter title="Aplicar filtro" modalState={imagePermissionsFilterModalState} setModalState={setImagePermissionsFilterModalState}><ImagePermissionsFilterDataModal /></ImagePermissionsFilter> : <></>}


            <Banner Icon={<ReportsPageBannerIcon />} type="reports" title='Relatórios' text="Veja os relatórios vinculados a sua escola" />
            <S.Body>
                {reports.map(it => (
                    <S.Block>
                        <S.BlockTitle>
                            <Title>{it.name}</Title>
                            <S.ButtonTitleContainer>
                                <Button label="Baixar Relatório" justifyText="center" type="button" variant={VariantButtonEnum.PRIMARY}
                                        leftIcon={<DownloadIcon color={theme.palette.light.tint} />}
                                    onClick={() => setDownloadStudentReportModalState(true)}/>
                            </S.ButtonTitleContainer>
                        </S.BlockTitle>
                        <S.BlockBody>
                            <S.BlockBodyDivisor>
                                <S.ButtonBodyContainer>
                                    <Button label="Aplicar filtro" type="button" justifyText="center" variant={VariantButtonEnum.SECONDARY_TRANSPARENT}
                                        onClick={() => handleFilterModal(it.key)}/>
                                </S.ButtonBodyContainer>
                                <S.ButtonBodyContainer>
                                    <Button label="Limpar filtro" type="button" justifyText="center" variant={VariantButtonEnum.PRIMARY_TRANSPARENT} />
                                </S.ButtonBodyContainer>
                            </S.BlockBodyDivisor>
                            <S.BlockBodyDivisor>
                                <S.ButtonBodyContainer>
                                    <Button label="Visualizar relatório" justifyText="center" type="button"
                                            rightIcon={<SimpleEyeIcon color={theme.palette.light.tint} />}
                                            variant={VariantButtonEnum.SECONDARY} />
                                </S.ButtonBodyContainer>
                            </S.BlockBodyDivisor>
                        </S.BlockBody>
                    </S.Block>
                ))}
            </S.Body>
        </S.Container>
    );
};
