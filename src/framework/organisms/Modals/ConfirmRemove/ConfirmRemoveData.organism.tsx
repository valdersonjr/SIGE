import React from 'react';
import * as S from './ConfirmRemoveData.style';
import {ConfirmRemoveDataProps} from "@organisms/Modals/ConfirmRemove/ConfirmRemoveData.interface";
import {Header} from "@molecules";
import {Button, VariantButtonEnum} from "@atoms";

const ConfirmRemoveData: React.FC<ConfirmRemoveDataProps> = ({title, children, setCanSave, modalState, setModalState}) => {
    return (
        <S.Container>
            <S.Modal>
                <S.Header>
                    <Header title={title} backButtonState={modalState} setBackButtonState={setModalState} />
                </S.Header>
                <S.InputsContainer>{ children }</S.InputsContainer>
                <S.ButtonsContainer>
                    <Button onClick={() => setModalState && modalState ? setModalState(!modalState) : <></> }
                            label="Cancelar" justifyText="center" variant={VariantButtonEnum.PRIMARY_TRANSPARENT} />
                    <Button label="Sim, confirmar!" onClick={() => setCanSave(true)} variant={VariantButtonEnum.SECONDARY} justifyText="center" />
                </S.ButtonsContainer>
            </S.Modal>
        </S.Container>
    );
}

export default ConfirmRemoveData;
