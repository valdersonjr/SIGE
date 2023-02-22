import React from 'react';
import {StudentsFilterProps} from "./StudentsFilter.interface";
import * as S from "./StudentsFilter.style";
import {Header} from "@molecules";
import {Button, VariantButtonEnum} from "@atoms";

const StudentsFilter: React.FC<StudentsFilterProps> = ({title, children, modalState, setModalState, setFilters}) => {
    const handleExitWithoutSaveClick = (event:React.SyntheticEvent) => {
        event.preventDefault();
        setModalState && modalState && setModalState(!modalState);
        setFilters({name: "", year: "", class: ""});
    }

    const handleExitAndSaveClick = (event:React.SyntheticEvent) => {
        event.preventDefault();
        setModalState && modalState && setModalState(!modalState);
    }

    return(
        <S.Container>
            <S.Modal>
                <S.Header>
                    <span onClick={() => setFilters({name: "", year: "", class: ""})}>
                        <Header title={title} backButtonState={modalState} setBackButtonState={setModalState} />
                    </span>
                </S.Header>
                <S.InputsContainer>{children}</S.InputsContainer>
                <S.ButtonsContainer>
                    <Button onClick={handleExitWithoutSaveClick} label="Sair sem aplicar" justifyText="center" variant={VariantButtonEnum.PRIMARY_TRANSPARENT} />
                    <Button onClick={handleExitAndSaveClick} label="Aplicar filtro" variant={VariantButtonEnum.SECONDARY} justifyText="center" />
                </S.ButtonsContainer>
            </S.Modal>
        </S.Container>
    )
};

export default StudentsFilter;
