import React, { useState } from "react";
import { Button, PostIt, Title, VariantButtonEnum } from "~/framework/atoms";

import { ColumnCenterCard, Header } from "~/framework/molecules";
import { Dropdown } from "~/framework/organisms";
import EditClassData from "~/framework/organisms/Modals/EditClassData/EditClassData.organism";

import { financeData, registrationData } from "./ViewClass.logic";
import { EditRegistrationDataModal } from "./EditRegistrationDataModalContent/EditRegistrationDataModal.content";
import { EditFinancialDataModal } from "./EditFinancialDataModalContent/EditFinancialData.content";
import * as S from './ViewClass.style';

const ViewClass: React.FC = () => {
    const [registrationModalState, setRegistrationModalState] = useState(false);
    const [financeModalState, setFinanceModalState] = useState(false);


    return (
        <S.Container>
            {registrationModalState ? <EditClassData title="Editar dados cadastrais" modalState={registrationModalState} setModalState={setRegistrationModalState}><EditRegistrationDataModal /></EditClassData> : <></>}
            {financeModalState ? <EditClassData title="Editar dados financeiros" modalState={financeModalState} setModalState={setFinanceModalState}><EditFinancialDataModal/></EditClassData> : <></>}
            <Header title="Turma" />
            <Dropdown title="Dados Cadastrais da Turma" buttonText="Editar Dados" onButtonClick={() => setRegistrationModalState(!registrationModalState)} >
                {registrationData.map((item)=>(
                    <PostIt  key={item.key} title={item.name} content={item.content} />
                ))}
            </Dropdown>
            <Dropdown title="Dados Financeiros" buttonText="Editar Dados" onButtonClick={() => setFinanceModalState(!financeModalState)} >
                {financeData.map((item)=>(
                    <PostIt  key={item.key} title={item.name} content={item.content} />
                ))}
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
            <h2>falta a tabela aqui</h2>
        </S.Container>
    )
}

export default ViewClass;
