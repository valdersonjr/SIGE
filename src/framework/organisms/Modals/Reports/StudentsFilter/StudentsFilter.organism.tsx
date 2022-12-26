import React from 'react';
import {StudentsFilterProps} from "@organisms/Modals/Reports/StudentsFilter/StudentsFilter.interface";
import * as S from "@organisms/Modals/Reports/DownloadStudentReport/DownloadStudentReport.style";
import {Header} from "@molecules";
import {Button, VariantButtonEnum} from "@atoms";

const StudentsFilter: React.FC<StudentsFilterProps> = ({title, children, modalState, setModalState}) => (
    <S.Container>
        <S.Modal>
            <S.Header>
                <Header title={title} backButtonState={modalState} setBackButtonState={setModalState} />
            </S.Header>
            <S.InputsContainer>{children}</S.InputsContainer>
            <S.ButtonsContainer>
                <Button onClick={() => setModalState && modalState ? setModalState(!modalState) : <></> } label="Sair sem aplicar" variant={VariantButtonEnum.PRIMARY_TRANSPARENT} />
                <Button label="Aplicar filtro" variant={VariantButtonEnum.SECONDARY} />
            </S.ButtonsContainer>
        </S.Modal>
    </S.Container>
);

export default StudentsFilter;
