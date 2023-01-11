import React, { useState } from "react";
import { Button, PostIt, Title, VariantButtonEnum } from "~/framework/atoms";

import { ColumnCenterCard, Header } from "~/framework/molecules";
import { Dropdown } from "~/framework/organisms";
import EditClassData from "~/framework/organisms/Modals/EditClassData/EditClassData.organism";

import { EditRegistrationDataModal } from "./EditRegistrationDataModalContent/EditRegistrationDataModal.content";
import { EditFinancialDataModal } from "./EditFinancialDataModalContent/EditFinancialData.content";
import * as S from './ViewClass.style';
import {ViewClassTable} from "@organisms/ViewClassTable/ViewClassTable.organism";
import { ViewClassProps } from "./ViewClass.interface";

const ViewClass: React.FC<ViewClassProps> = ({ classs }) => {
    const [registrationModalState, setRegistrationModalState] = useState(false);
    const [financeModalState, setFinanceModalState] = useState(false);

    return (
        <S.Container>
            {registrationModalState && <EditClassData title="Editar dados cadastrais" modalState={registrationModalState} setModalState={setRegistrationModalState}><EditRegistrationDataModal /></EditClassData>}
            {financeModalState && <EditClassData title="Editar dados financeiros" modalState={financeModalState} setModalState={setFinanceModalState}><EditFinancialDataModal/></EditClassData>}
            <Header title="Turma" />
            <Dropdown title="Dados Cadastrais da Turma" buttonText="Editar Dados" onButtonClick={() => setRegistrationModalState(!registrationModalState)} >
                <PostIt title="Nome" content={classs?.descricao} />
                <PostIt title="Período" content={`${classs?.periodo_turma_descricao} - ${classs?.horario}`} />
                <PostIt title="Vagas para Turma" content={undefined} />
            </Dropdown>
            <Dropdown title="Dados Financeiros" buttonText="Editar Dados" onButtonClick={() => setFinanceModalState(!financeModalState)} >
                <PostIt title="Valor mensalidade" content={classs?.valor_mensalidade} />
                <PostIt title="Valor reifeição" content={classs?.valor_refeicao} />
                <PostIt title="Valor hora extra" content={classs?.valor_hora_extra} />
                <PostIt title="Valor Projeto nutricionista" content={classs?.valor_projeto_nutricional} />
                <PostIt title="Valor Material didático" content={classs?.valor_material_didatico} />
                <PostIt title="Valor Material pedagógico" content={classs?.valor_material_pedagogico} />
            </Dropdown>
            <S.LinkedStudentsHeader>
                <Title>Alunos Vínculados</Title>
                <div style={{"maxWidth":"300px"}}>
                    <Button label="Vincular Novo Aluno" justifyText="center" variant={VariantButtonEnum.SECONDARY} />
                </div>
            </S.LinkedStudentsHeader>
            <S.CardsContainer>
                <ColumnCenterCard label="Alunos vinculados" value={10} variant="first" />
                <ColumnCenterCard label="Vagas disponíveis" value={10} variant="second" />
                <ColumnCenterCard label="Alunos desativados" value={2} variant="third" />
                <ColumnCenterCard label="Alunos ativos" value={10} variant="fourth" />
            </S.CardsContainer>
            <ViewClassTable />
        </S.Container>
    )
}

export default ViewClass;
