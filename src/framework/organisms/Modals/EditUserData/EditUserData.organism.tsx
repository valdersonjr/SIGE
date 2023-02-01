import React from 'react';
import { Button, VariantButtonEnum } from '~/framework/atoms';
import { Header } from '~/framework/molecules';
import { EditUserDataProps } from './EditUserData.interface';

import * as S from "./EditUserData.style";

const EditUserData: React.FC<EditUserDataProps> = ({ title, children, modalState, setModalState, handleModalSubmit }) => {
    return (
        <S.Container onSubmit={handleModalSubmit}>
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

export default EditUserData;
