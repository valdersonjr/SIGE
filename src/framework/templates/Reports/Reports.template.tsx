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
import ViewReport from './ViewReport/ViewReport.template';
import { IBillsReportsModalFilters, IBirthDayPhoneContactReportsModalFilters, IBirthdaysReportsModalFilters, IExtraClassActivitiesReportsModalFilters, IImagePermissionReportsModalFilters, IPeriodsReportsModalFilters, IPhoneContactReportsModalFilters, IStudentsReportsModalFilters } from '~/models/dataview';
import ExtraClassActivitiesFilter from '~/framework/organisms/Modals/Reports/ExtraClassActivitiesFilter/ExtraClassActivitiesFilter.organism';
import BillsFilter from '~/framework/organisms/Modals/Reports/BillsFilter/BillsFilter.organism';
import { ExtraClassActivitiesFilterDataModal } from './ReportsDataModalContent/ExtraClassActivitiesFilterContent/ExtraClassActivitiesFilterDataModal.content';
import { BillsFilterDataModalContent } from './ReportsDataModalContent/BillsFilterContent/BillsFilterData.content';
import { BirthdayPhoneContactFilterDataModal } from './ReportsDataModalContent/BirthdayPhoneContactFilterContent/BirthdayPhoneContactFilterDataModal.content';
import BirthdayPhoneContactFilter from '~/framework/organisms/Modals/Reports/BirthdayPhoneContactFilter/BirthdayPhoneContactFilter.organism';

import { ReportsEndpoints } from "~/utils/enums";

export const Reports: React.FC = () => {
    
    const [viewReportModalState, setViewReportModalState] = useState(false);    
    const [viewReportModalEndpoint, setViewReportModalEndpoint] = useState('');    

    //boolean modals visualization controllers
    const [downloadStudentReportModalState, setDownloadStudentReportModalState] = useState(false);

    const [studentsFilterModalState, setStudentsFilterModalState] = useState(false);
    const [birthdaysFilterModalState, setBirthdaysFilterModalState] = useState(false);
    const [extraClassActivitiesFilterModalState, setExtraClassActivitiesFilterModalState] = useState(false);
    const [billetsFilterModalState, setBilletsFilterModalState] = useState(false);
    const [phoneContactFilterModalState, setPhoneContactFilterModalState] = useState(false);
    const [phoneContactBirthdaysFilterModalState, setPhoneContactBirthdaysFilterModalState] = useState(false);
    const [periodsFilterModalState, setPeriodsFilterModalState] = useState(false);
    const [imagePermissionsFilterModalState, setImagePermissionsFilterModalState] = useState(false);

    //filters
    const [studentsModalFilters, setStudentsModalFilter] = useState<IStudentsReportsModalFilters>({ name: '', year: '', class: ''});
    const [birthdaysModalFilters, setBirthdaysModalFilter] = useState<IBirthdaysReportsModalFilters>({ year: '', class: '', initialDate: '', finalDate: '', registerType: '' });
    const [extraClassActivitiesModalFilters, setExtraClassActivitiesModalFilters] = useState<IExtraClassActivitiesReportsModalFilters>({ year: '', class: '', studentName: '', activity: '' });
    const [billsModalFilters, setBillsModalFilters] = useState<IBillsReportsModalFilters>({ year: '', class: '', studentName: '' });
    const [phoneContactFilters, setPhoneContactFilters] = useState<IPhoneContactReportsModalFilters>({ year: '', class: '', studentName: '', mothersName: '', fathersName: '' });
    const [birthdayPhoneContactFilters, setBirthdayPhoneContactFilters] = useState<IBirthDayPhoneContactReportsModalFilters>({ year: '', class: '', studentsName: '', mothersName: '', fathersName: '' });
    const [periodFilters, setPeriodFilters] = useState<IPeriodsReportsModalFilters>({ year: '', classNPeriod: '', studentsName: '' });
    const [imagePermissionFilters, setImagePermissionFilters] = useState<IImagePermissionReportsModalFilters>({ year: '', class: '', studentsName: '', allowedImageDisclosure: false });
    


    const handleFilterModal = (key: string) => {
        switch (key) {
            case 'students': setStudentsFilterModalState(true);
                break;
            case 'birthdays': setBirthdaysFilterModalState(true);
                break;
            case 'activities': setExtraClassActivitiesFilterModalState(true);
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

    const handleViewReportClick = (endpoint:string) => {
        setViewReportModalState(!viewReportModalState);
        setViewReportModalEndpoint(endpoint);
    }

    const handleFilterReset = (endpoint:string) => {
        if(endpoint === ReportsEndpoints.ALUNOS) setStudentsModalFilter({ name: '', year: '', class: ''});
        else if(endpoint === ReportsEndpoints.ANIVERSARIOS) setBirthdaysModalFilter({ year: '', class: '', initialDate: '', finalDate: '', registerType: '' });
        else if(endpoint === ReportsEndpoints.ATIVIDADES_EXTRA_CLASSE) setExtraClassActivitiesModalFilters({ year: '', class: '', studentName: '', activity: '' });
        else if(endpoint === ReportsEndpoints.BOLETOS) setBillsModalFilters({ year: '', class: '', studentName: '' });
        else if(endpoint === ReportsEndpoints.CONTATO_TELEFONICO) setPhoneContactFilters({ year: '', class: '', studentName: '', mothersName: '', fathersName: '' });
        else if(endpoint === ReportsEndpoints.CONTATO_TELEFONICO_ANIVERSARIO) setBirthdayPhoneContactFilters({ year: '', class: '', studentsName: '', mothersName: '', fathersName: '' });
        else if(endpoint === ReportsEndpoints.PERIODOS) setPeriodFilters({ year: '', classNPeriod: '', studentsName: '' });
        else if(endpoint === ReportsEndpoints.PERMISSAO_IMAGEM) setImagePermissionFilters({ year: '', class: '', studentsName: '', allowedImageDisclosure: false });
    }

    return (
        <S.Container>
            {viewReportModalState && <ViewReport 
                state={viewReportModalState}
                endpoint={viewReportModalEndpoint} 
                setModalState={setViewReportModalState}
                filters={{
                    studentsFilters: studentsModalFilters, 
                    birthdaysFilters: birthdaysModalFilters, 
                    extraClassAcitivitiesFilters: extraClassActivitiesModalFilters,
                    billsFilters: billsModalFilters,
                    phoneContactFilters: phoneContactFilters,
                    birthdayPhoneContactFilters: birthdayPhoneContactFilters,
                    periodFilters: periodFilters,
                    imagePermissionFilters: imagePermissionFilters
                }}
                />}

            {downloadStudentReportModalState && <DownloadStudentReport title="Baixar relatórios de alunos" modalState={downloadStudentReportModalState} setModalState={setDownloadStudentReportModalState}><DownloadStudentReportDataModal /></DownloadStudentReport>}
            {studentsFilterModalState && <StudentsFilter title="Aplicar filtro" modalState={studentsFilterModalState} setModalState={setStudentsFilterModalState} setFilters={setStudentsModalFilter} ><StudentsFilterDataModal filters={studentsModalFilters} setFilters={setStudentsModalFilter} /></StudentsFilter>}
            {birthdaysFilterModalState && <BirthdaysFilter title="Aplicar filtro" modalState={birthdaysFilterModalState} setModalState={setBirthdaysFilterModalState} setFilters={setBirthdaysModalFilter} ><BirthdaysFilterDataModal filters={birthdaysModalFilters} setFilters={setBirthdaysModalFilter} /></BirthdaysFilter>}
            {extraClassActivitiesFilterModalState && <ExtraClassActivitiesFilter title="Aplicar filtro" modalState={extraClassActivitiesFilterModalState} setModalState={setExtraClassActivitiesFilterModalState} setFilters={setExtraClassActivitiesModalFilters}><ExtraClassActivitiesFilterDataModal filters={extraClassActivitiesModalFilters} setFilters={setExtraClassActivitiesModalFilters} /></ExtraClassActivitiesFilter>}
            {billetsFilterModalState && <BillsFilter title="Aplicar filtro" modalState={billetsFilterModalState} setModalState={setBilletsFilterModalState} setFilters={setBillsModalFilters}><BillsFilterDataModalContent filters={billsModalFilters} setFilters={setBillsModalFilters} /></BillsFilter>}
            {phoneContactFilterModalState && <PhoneContactFilter title="Aplicar filtro" modalState={phoneContactFilterModalState} setModalState={setPhoneContactFilterModalState} setFilters={setPhoneContactFilters}><PhoneContactFilterDataModal filters={phoneContactFilters} setFilters={setPhoneContactFilters} /></PhoneContactFilter>}
            {phoneContactBirthdaysFilterModalState && <BirthdayPhoneContactFilter title="Aplicar filtro" modalState={phoneContactBirthdaysFilterModalState} setModalState={setPhoneContactBirthdaysFilterModalState} setFilters={setBirthdayPhoneContactFilters}><BirthdayPhoneContactFilterDataModal filters={birthdayPhoneContactFilters} setFilters={setBirthdayPhoneContactFilters} /></BirthdayPhoneContactFilter>}
            {periodsFilterModalState && <PeriodsFilter title="Aplicar filtro" modalState={periodsFilterModalState} setModalState={setPeriodsFilterModalState} setFilters={setPeriodFilters}><PeriodsFilterDataModal filters={periodFilters} setFilters={setPeriodFilters} /></PeriodsFilter>}
            {imagePermissionsFilterModalState && <ImagePermissionsFilter title="Aplicar filtro" modalState={imagePermissionsFilterModalState} setModalState={setImagePermissionsFilterModalState} setFilters={setImagePermissionFilters}><ImagePermissionsFilterDataModal filters={imagePermissionFilters} setFilters={setImagePermissionFilters} /></ImagePermissionsFilter>}


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
                                    <Button label="Limpar filtro" type="button" justifyText="center" variant={VariantButtonEnum.PRIMARY_TRANSPARENT}
                                    onClick={() => handleFilterReset(it.endpoint)} />
                                </S.ButtonBodyContainer>
                            </S.BlockBodyDivisor>
                            <S.BlockBodyDivisor>
                                <S.ButtonBodyContainer>
                                    <Button label="Visualizar relatório" justifyText="center" type="button"
                                            rightIcon={<SimpleEyeIcon color={theme.palette.light.tint} />}
                                            variant={VariantButtonEnum.SECONDARY}
                                            onClick={() => handleViewReportClick(it.endpoint)} />
                                </S.ButtonBodyContainer>
                            </S.BlockBodyDivisor>
                        </S.BlockBody>
                    </S.Block>
                ))}
            </S.Body>
        </S.Container>
    );
};
