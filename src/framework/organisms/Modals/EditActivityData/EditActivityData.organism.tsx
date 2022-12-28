import React from 'react';
import * as S from './EditActivityData.style';
import {EditActivityDataProps} from "@organisms/Modals/EditActivityData/EditActivityData.interface";
import {Header} from "@molecules";
import {Button, VariantButtonEnum} from "@atoms";

const EditActivityData: React.FC<EditActivityDataProps> = ({title, children, modalState, setModalState}) => {
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

export default EditActivityData;
