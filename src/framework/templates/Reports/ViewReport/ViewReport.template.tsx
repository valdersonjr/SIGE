import { useEffect, useState } from "react";

import { Title } from "~/framework/atoms";

import { BillsReportTable, BirthdayPhoneContactRerportTable, BirthdaysReportTable, ExtraClassActivities, ImagePermissionReportTable, Loading, PeriodsReportTable, PhoneContactRerportTable, StudentsReportTable } from "~/framework/organisms";

import { getReportApiService } from "~/service/api/report.service";

import * as S from "./ViewReport.style";
import { ViewReportProps } from "./ViewReport.inteface";
import { getFilteredData, getReportType } from "./ViewReports.logic";
import { Pagination } from "@mui/material";
import { ReportsEndpoints } from "~/utils/enums";


const ViewReport:React.FC<ViewReportProps> = ({ state, endpoint, setModalState, filters }) => {
    const [modalData, setModalData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [nextPage, setNextPage] = useState(1);

    let itemsPerPage = 5;

    useEffect(() => {
        getReportApiService(endpoint, nextPage, itemsPerPage).then((response:any) => {
            setCurrentPage(response.meta.current_page);
            console.log(response.data);
            const filteredData = getFilteredData(endpoint, response.data, filters);
            setModalData(filteredData);
        })
    },[nextPage]);

    const handleChange = (_event: React.ChangeEvent<unknown>, page: number) => {
        setNextPage(page);
    }

    return(
        <S.Container>
            <S.Modal>
                <S.CloseIcon onClick={() => setModalState && setModalState(!state)} />
                <S.ModalHeader>
                    <img src="/logo.svg" alt="Logo do SIGE" />
                    <S.ModalTextContainer>
                        <Title size={30}>Relatório de {getReportType(endpoint)}</Title>
                        <Title size={14}>Alunos da turma "x"</Title>
                    </S.ModalTextContainer>
                </S.ModalHeader>
                {endpoint === ReportsEndpoints.ALUNOS && modalData && <StudentsReportTable data={modalData} />}
                {endpoint === ReportsEndpoints.ANIVERSARIOS && modalData && <BirthdaysReportTable data={modalData} />}
                {endpoint === ReportsEndpoints.ATIVIDADES_EXTRA_CLASSE && modalData && <ExtraClassActivities data={modalData} />}
                {endpoint === ReportsEndpoints.BOLETOS && modalData && <BillsReportTable data={modalData} />}
                {endpoint === ReportsEndpoints.CONTATO_TELEFONICO && modalData && <PhoneContactRerportTable data={modalData} />}
                {endpoint === ReportsEndpoints.CONTATO_TELEFONICO_ANIVERSARIO && modalData && <BirthdayPhoneContactRerportTable data={modalData} />}
                {endpoint === ReportsEndpoints.PERIODOS && modalData && <PeriodsReportTable data={modalData} />}
                {endpoint === ReportsEndpoints.PERMISSAO_IMAGEM && modalData && <ImagePermissionReportTable data={modalData} />}
                {(endpoint === '' || !modalData) && <S.LoadingContainer><Loading/></S.LoadingContainer>}
                <S.ModalFooter>
                    {modalData && <Pagination page={currentPage} count={(modalData.length/itemsPerPage)} color="primary" showFirstButton showLastButton onChange={handleChange}  />}
                </S.ModalFooter>
            </S.Modal>
        </S.Container>
    )
}

export default ViewReport;