import React from 'react';
import * as S from './EditTeacherContactData.style';
import {Header} from "@molecules";
import {Button, VariantButtonEnum} from "@atoms";
import {EditTeacherContactDataProps} from "@organisms/Modals/EditTeacherContactData/EditTeacherContactData.interface";

const EditTeacherContactData: React.FC<EditTeacherContactDataProps> = ({title, children, modalState, setModalState}) => {
    return (
        <S.Container>
            <S.Modal>
                <S.Header>
                    <Header title={title} backButtonState={modalState} setBackButtonState={setModalState} />
                </S.Header>
                <S.InputsContainer>{ children }</S.InputsContainer>
                <S.ButtonsContainer>
                    <Button onClick={() => setModalState && modalState ? setModalState(!modalState) : <></> } label="Sair sem Salvar" justifyText="center" variant={VariantButtonEnum.PRIMARY_TRANSPARENT} />
                    <Button label="Salvar alterações" variant={VariantButtonEnum.SECONDARY} justifyText="center" />
                </S.ButtonsContainer>
            </S.Modal>
        </S.Container>
    );
}

export default EditTeacherContactData;
