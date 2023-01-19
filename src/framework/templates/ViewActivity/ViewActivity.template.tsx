import React, {useState} from 'react';
import * as S from './ViewActivity.style';
import {ColumnCenterCard, Header} from "@molecules";
import {Dropdown} from "@organisms";
import {Button, PostIt, Title, VariantButtonEnum} from "@atoms";
import EditActivityData from "@organisms/Modals/EditActivityData/EditActivityData.organism";
import {
    EditActivityDataModal
} from "@templates/ViewActivity/EditActivityDataModalContent/EditActivityDataModal.content";
import {ViewActivityTable} from "@organisms/ViewActivityTable/ViewActivityTable.organism";
import { ViewActivityProps } from './ViewActivity.interface';

const ViewActivity: React.FC<ViewActivityProps> = ({activity}) => {
    const [activityRegistrationModalState, setActivityRegistrationModalState] = useState(false);

    return (
        <S.Container>
            {activityRegistrationModalState && <EditActivityData title="Editar dados cadastrais" modalState={activityRegistrationModalState} setModalState={setActivityRegistrationModalState} children={<EditActivityDataModal />} />}

            <Header title="Visualizar Atividade" />

            <Dropdown title="Dados Cadastrais da Atividade" buttonText="Editar Dados" onButtonClick={() => setActivityRegistrationModalState(!activityRegistrationModalState)} >
                <PostIt title="Atividade" content={activity?.descricao} />
            </Dropdown>

            <S.LinkedStudentsHeader>
                <Title>Períodos da Atividade</Title>
                <div style={{"maxWidth":"300px"}}>
                    <Button label="Vincular Nova Atividade" justifyText="center" variant={VariantButtonEnum.SECONDARY} />
                </div>
            </S.LinkedStudentsHeader>
            <S.CardsContainer>
                <ColumnCenterCard label="Total de períodos" value={3} variant="first" />
                <ColumnCenterCard label="Vagas disponíveis" value={30} variant="third" />
                <ColumnCenterCard label="Períodos com vagas disponíveis" value={2} variant="fourth" />
            </S.CardsContainer>

            <ViewActivityTable />
        </S.Container>
    );
}

export default ViewActivity;
