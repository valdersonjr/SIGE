import React from "react";
import { Button, VariantButtonEnum } from "~/framework/atoms";
import { Header } from "~/framework/molecules";
import { EditStudentDataProps } from "./EditStudentData.interface";

import * as S from './EditStudentData.style';

const EditStudentData:React.FC<EditStudentDataProps> = ({title, children, modalState, setModalState}) => {
    return(
        <S.Container>
             <S.Modal>
                <S.Header>
                    <Header title={title} backButtonState={modalState} setBackButtonState={setModalState} />
                </S.Header>
                <S.InputsContainer>{ children }</S.InputsContainer>
                <S.ButtonsContainer>
                    <Button onClick={() => setModalState && modalState ? setModalState(!modalState) : <></> }
                            label="Sair sem Salvar" justifyText="center" variant={VariantButtonEnum.PRIMARY_TRANSPARENT} />
                    <Button onClick={(e) => e.preventDefault()} label="Salvar alterações" variant={VariantButtonEnum.SECONDARY} justifyText="center"/>
                </S.ButtonsContainer>
            </S.Modal>
        </S.Container>
    )
}

export default EditStudentData;