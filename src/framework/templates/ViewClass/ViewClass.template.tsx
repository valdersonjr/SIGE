import React, { useState } from "react";
import { Button, PostIt, Title, VariantButtonEnum } from "~/framework/atoms";

import { ColumnCenterCard, Header } from "~/framework/molecules";
import { Dropdown } from "~/framework/organisms";
import EditClassData from "~/framework/organisms/Modals/EditClassData/EditClassData.organism";

import { financeData, registrationData } from "./ViewClass.logic";
import { EditDataModalContent } from "./EditDataModalContent/EditDataModalContent";
import * as S from './ViewClass.style';

const ViewClass: React.FC = () => {
    const [modalState, setModalState] = useState(false);


    return (
        <S.Container>
            {modalState ? <EditClassData modalState={modalState} setModalState={setModalState}><EditDataModalContent /></EditClassData> : <></>}
            <Header title="Turma" />
            <Dropdown title="Dados Cadastrais da Turma" buttonText="Editar Dados" onButtonClick={() => setModalState(!modalState)} >
                {registrationData.map((item)=>(
                    <PostIt  key={item.key} title={item.name} content={item.content} />
                ))}
            </Dropdown>
            <Dropdown title="Dados Financeiros" buttonText="Editar Dados" onButtonClick={() => console.log("chamar modal-2")} >
                {financeData.map((item)=>(
                            <PostIt  key={item.key} title={item.name} content={item.content} />
                ))}
            </Dropdown>
            <S.LinkedStudentsHeader>
                <Title>Alunos Vínculados</Title>
                <div style={{"maxWidth":"300px"}}>
                    <Button label="Vincular Novo Aluno" variant={VariantButtonEnum.SECONDARY} />
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