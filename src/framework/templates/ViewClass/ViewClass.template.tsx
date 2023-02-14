import React, {useEffect, useState} from "react";
import { PostIt, Title } from "~/framework/atoms";

import { Header } from "~/framework/molecules";
import { Dropdown } from "~/framework/organisms";
import EditClassData from "~/framework/organisms/Modals/EditClassData/EditClassData.organism";

import { EditRegistrationDataModal } from "./EditRegistrationDataModalContent/EditRegistrationDataModal.content";
import { EditFinancialDataModal } from "./EditFinancialDataModalContent/EditFinancialData.content";
import * as S from './ViewClass.style';
import {ViewClassTable} from "@organisms/ViewClassTable/ViewClassTable.organism";
import { ViewClassProps } from "./ViewClass.interface";
import {getClassApiService} from "@service/api";
import {Loading} from "@organisms/Loading/Loading.organism";

const ViewClass: React.FC<ViewClassProps> = ({ classId, reload, setFinanceModalState, setRegistrationModalState, registrationModalState, financeModalState, handleSubmit }) => {
    const [data, setData] = useState<any>();
    const [dataOneToSave, setDataOneToSave] = useState<any>();
    const [dataTwoToSave, setDataTwoToSave] = useState<any>();
    const [canSave, setCanSave] = useState(false);

    const [loading, setLoading] = useState<boolean>(true);
    const [isAllReqDone, setIsAllReqDone] = useState<boolean[]>([false]);

    useEffect(() => {
        getClassApiService(classId)
            .then(response => {
                setData(response.data);
                setIsAllReqDone([true]);
            }).catch(error => console.error(error));
    },[reload]);

    useEffect(() => {
        if (canSave) {
            handleSubmit({...data, ...dataOneToSave, ...dataTwoToSave});
            setCanSave(false);
        }
    }, [canSave]);

    useEffect(() => {
        if (isAllReqDone.every(it => it)) setLoading(false);
    }, [isAllReqDone]);

    const sumTotal = (): number => {
        return data?.valor_mensalidade +
            data?.valor_refeicao +
            data?.valor_hora_extra +
            data?.valor_projeto_nutricional +
            data?.valor_material_didatico +
            data?.valor_material_pedagogico;
    }

    return (
        <S.Container>
            {registrationModalState &&
              <EditClassData title="Editar dados cadastrais"
                             modalState={registrationModalState} setModalState={setRegistrationModalState}
                             setCanSave={setCanSave}>
                <EditRegistrationDataModal data={data} setData={setDataOneToSave} />
              </EditClassData>}
            {financeModalState &&
              <EditClassData title="Editar dados financeiros" modalState={financeModalState} setModalState={setFinanceModalState} setCanSave={setCanSave}>
                <EditFinancialDataModal data={data} setData={setDataTwoToSave} />
              </EditClassData>}

            <Header title="Turma" />
            {!loading ? (
                <React.Fragment>
                    <Dropdown title="Dados Cadastrais da Turma" buttonText="Editar Dados" onButtonClick={() => setRegistrationModalState(!registrationModalState)}>
                        <PostIt title="Ensino" content={[data?.ensino]} />
                        <PostIt title="Nome" content={[data?.descricao]} />
                        <PostIt title="Período" content={[`${data?.periodo_turma?.horario_entrada} - ${data?.periodo_turma?.horario_saida}`]} />
                    </Dropdown>
                    <Dropdown title="Dados Financeiros" buttonText="Editar Dados" onButtonClick={() => setFinanceModalState(!financeModalState)} >
                        <PostIt title="Valor mensalidade" content={[`R$ ${data?.valor_mensalidade.toFixed(2)}`]} />
                        <PostIt title="Valor reifeição" content={[`R$ ${data?.valor_refeicao.toFixed(2)}`]} />
                        <PostIt title="Valor hora extra" content={[`R$ ${data?.valor_hora_extra.toFixed(2)}`]} />
                        <PostIt title="Valor Projeto nutricionista" content={[`R$ ${data?.valor_projeto_nutricional.toFixed(2)}`]} />
                        <PostIt title="Valor Material didático" content={[`R$ ${data?.valor_material_didatico.toFixed(2)}`]} />
                        <PostIt title="Valor Material pedagógico" content={[`R$ ${data?.valor_material_pedagogico.toFixed(2)}`]} />
                        <PostIt title="Total" content={[`R$ ${sumTotal().toFixed(2)}`]} />
                    </Dropdown>
                    <S.LinkedStudentsHeader>
                        <Title>Alunos Vínculados</Title>
                        {/*<div style={{"maxWidth":"300px"}}>*/}
                        {/*    <Button label="Vincular Novo Aluno" justifyText="center" variant={VariantButtonEnum.SECONDARY} />*/}
                        {/*</div>*/}
                    </S.LinkedStudentsHeader>
                    {/*<S.CardsContainer>*/}
                    {/*    <ColumnCenterCard label="Alunos vinculados" value={10} variant="first" />*/}
                    {/*    <ColumnCenterCard label="Vagas disponíveis" value={10} variant="second" />*/}
                    {/*    <ColumnCenterCard label="Alunos desativados" value={2} variant="third" />*/}
                    {/*    <ColumnCenterCard label="Alunos ativos" value={10} variant="fourth" />*/}
                    {/*</S.CardsContainer>*/}
                    <ViewClassTable students={data?.matriculados} />
                </React.Fragment>
            ) : <Loading />}
        </S.Container>
    )
}

export default ViewClass;
