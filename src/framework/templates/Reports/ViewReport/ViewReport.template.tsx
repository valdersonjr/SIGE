import { useEffect, useState } from "react";

import { Title } from "~/framework/atoms";

import { BillsReportTable, BirthdayPhoneContactRerportTable, BirthdaysReportTable, ExtraClassActivities, ImagePermissionReportTable, Loading, PeriodsReportTable, PhoneContactRerportTable, StudentsReportTable } from "~/framework/organisms";

import { getReportApiService } from "~/service/api/report.service";

import * as S from "./ViewReport.style";
import { ViewReportProps } from "./ViewReport.inteface";
import { Endpoints, getReportType } from "./ViewReports.logic";
import { Pagination } from "@mui/material";


const ViewReport:React.FC<ViewReportProps> = ({ state, endpoint, setModalState, studentsModalFilters }) => {
    const [modalData, setModalData] = useState([]);
    const [filteredModalData, setFilteredModalData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [nextPage, setNextPage] = useState(1);

    let itemsPerPage = 5;

    useEffect(() => {
        getReportApiService(endpoint, nextPage, itemsPerPage).then((response:any) => {
            setModalData(response.data);
            setCurrentPage(response.meta.current_page);
        })
    },[nextPage]);

    const handleChange = (_event: React.ChangeEvent<unknown>, page: number) => {
        setNextPage(page);
    }

    let filteredData = modalData;
    if(endpoint === Endpoints.ALUNOS && filteredData){
        setModalData(filteredData.filter((elem:{ aluno_nome:string }) => elem.aluno_nome.includes(studentsModalFilters.name)));
        // filteredData = filteredData.filter((elem:{ ano:string }) => elem.ano === studentsModalFilters.year);
        // filteredData = filteredData.filter((elem:{ turma_descricao:string }) => elem.turma_descricao === studentsModalFilters.class);
    }

    useEffect(() => setFilteredModalData(modalData), []);

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
                {endpoint === Endpoints.ALUNOS && filteredModalData && <StudentsReportTable data={filteredModalData} />}
                {endpoint === Endpoints.ANIVERSARIOS && modalData && <BirthdaysReportTable data={modalData} />}
                {endpoint === Endpoints.ATIVIDADES_EXTRA_CLASSE && modalData && <ExtraClassActivities data={modalData} />}
                {endpoint === Endpoints.BOLETOS && modalData && <BillsReportTable data={modalData} />}
                {endpoint === Endpoints.CONTATO_TELEFONICO && modalData && <PhoneContactRerportTable data={modalData} />}
                {endpoint === Endpoints.CONTATO_TELEFONICO_ANIVERSARIO && modalData && <BirthdayPhoneContactRerportTable data={modalData} />}
                {endpoint === Endpoints.PERIODOS && modalData && <PeriodsReportTable data={modalData} />}
                {endpoint === Endpoints.PERMISSAO_IMAGEM && modalData && <ImagePermissionReportTable data={modalData} />}
                {(endpoint === '' || !modalData) && <S.LoadingContainer><Loading/></S.LoadingContainer>}
                <S.ModalFooter>
                    {filteredModalData && <Pagination page={currentPage} count={(filteredModalData.length/itemsPerPage)} color="primary" showFirstButton showLastButton onChange={handleChange}  />}
                </S.ModalFooter>
            </S.Modal>
        </S.Container>
    )
}

export default ViewReport;