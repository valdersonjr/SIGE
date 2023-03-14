import React from 'react';
import * as S from "./BirthdaysFilter.style";
import {Header} from "@molecules";
import {Button, VariantButtonEnum} from "@atoms";
import {BirthdaysFilterProps} from "./BirthdaysFilter.interface";

const BirthdaysFilter: React.FC<BirthdaysFilterProps> = ({title, children, modalState, setModalState, setFilters}) => {
    const handleExitWithoutSaveClick = (event:React.SyntheticEvent) => {
        event.preventDefault();
        setModalState && modalState && setModalState(!modalState);
        setFilters({year: "", class: "", initialDate: '', finalDate: '', registerType: ''});
    }

    const handleExitAndSaveClick = (event:React.SyntheticEvent) => {
        event.preventDefault();
        setModalState && modalState && setModalState(!modalState);
    }

    return(
        <S.Container>
            <S.Modal>
                <S.Header>
                    <span onClick={() => setFilters({year: "", class: "", initialDate: '', finalDate: '', registerType: ''})}>
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

export default BirthdaysFilter;
