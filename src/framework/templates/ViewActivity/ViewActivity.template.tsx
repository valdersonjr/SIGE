import React, {useEffect, useState} from 'react';
import * as S from './ViewActivity.style';
import {Header} from "@molecules";
import {Dropdown} from "@organisms";
import {PostIt, Title} from "@atoms";
import EditActivityData from "@organisms/Modals/EditActivityData/EditActivityData.organism";
import {
    EditActivityDataModal
} from "@templates/ViewActivity/EditActivityDataModalContent/EditActivityDataModal.content";
import {ViewActivityTable} from "@organisms/ViewActivityTable/ViewActivityTable.organism";
import {ViewActivityProps} from "@templates/ViewActivity/ViewActivity.interface";
import {getActivityApiService} from "@service/api";
import {Loading} from "@organisms/Loading/Loading.organism";

const ViewActivity: React.FC<ViewActivityProps> = ({activityId, setActivityRegistrationModalState, activityRegistrationModalState, handleSubmit, reload}) => {
    const [canSave, setCanSave] = useState(false);
    const [data, setData] = useState<any>();
    const [dataToSave, setDataToSave] = useState<any>();

    const [loading, setLoading] = useState<boolean>(true);
    const [isAllReqDone, setIsAllReqDone] = useState<boolean[]>([false]);

    useEffect(() => {
        getActivityApiService(activityId)
            .then(response => {
                setData(response.data);
                setDataToSave(response.data);
                setIsAllReqDone([true]);
            }).catch(err => console.error(err));
    }, [reload]);

    useEffect(() => {
        if (canSave) {
            handleSubmit(dataToSave);
            setCanSave(false);
        }
    }, [canSave]);

    useEffect(() => {
        if (isAllReqDone.every(it => it)) setLoading(false);
    }, [isAllReqDone]);

    return (
        <S.Container>
            {activityRegistrationModalState &&
                  <EditActivityData title="Editar dados cadastrais" setCanSave={setCanSave}
                     modalState={activityRegistrationModalState} setModalState={setActivityRegistrationModalState}
                     children={<EditActivityDataModal data={data} setData={setDataToSave} />} />}

            <Header title="Visualizar Atividade" />

            {!loading ? (
                <React.Fragment>
                    <Dropdown title="Dados Cadastrais da Atividade" buttonText="Editar Dados"
                              onButtonClick={() => setActivityRegistrationModalState(!activityRegistrationModalState)}>
                        <PostIt key={data?.id} title="Atividade" content={[data?.descricao]} />
                    </Dropdown>

                    <S.LinkedStudentsHeader>
                        <Title>Períodos da Atividade</Title>
                    </S.LinkedStudentsHeader>
                    <ViewActivityTable data={dataToSave} />
                </React.Fragment>
            ) : <Loading />}
        </S.Container>
    );
}

export default ViewActivity;
