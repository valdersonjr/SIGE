import React from "react";

import { Button, VariantButtonEnum } from "~/framework/atoms";
import { Header } from "~/framework/molecules";

import { EditClassDataProps } from "./EditClassData.interface";
import * as S from './EditClassData.style';

const EditClassData:React.FC<EditClassDataProps> = ({ title, children, modalState, setModalState }) => {
    return(
        <S.Container>
            <S.Modal>
                <S.Header>
                    <Header title={title} backButtonState={modalState} setBackButtonState={setModalState} />
                </S.Header>
                <S.InputsContainer>{ children }</S.InputsContainer>
                <S.ButtonsContainer>
                    <Button onClick={() => setModalState && modalState ? setModalState(!modalState) : <></> } label="Sair sem Salvar" variant={VariantButtonEnum.PRIMARY_TRANSPARENT} />
                    <Button label="Salvar alterações" variant={VariantButtonEnum.SECONDARY} />
                </S.ButtonsContainer>
            </S.Modal>
        </S.Container>
    )
}

export default EditClassData;