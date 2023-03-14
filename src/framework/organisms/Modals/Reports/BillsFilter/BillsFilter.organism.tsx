import React from 'react';
import * as S from "./BillsFilter.style";
import {Header} from "@molecules";
import {Button, VariantButtonEnum} from "@atoms";
import { BillsFilterProps } from './BillsFilter.interface';

const BillsFilter: React.FC<BillsFilterProps> = ({title, children, modalState, setModalState, setFilters}) => {
    const handleExitWithoutSaveClick = (event:React.SyntheticEvent) => {
        event.preventDefault();
        setModalState && modalState && setModalState(!modalState);
        setFilters({year: "", class: "", studentName: ''});
    }

    const handleExitAndSaveClick = (event:React.SyntheticEvent) => {
        event.preventDefault();
        setModalState && modalState && setModalState(!modalState);
    }

    return(
        <S.Container>
            <S.Modal>
                <S.Header>
                    <Header title={title} backButtonState={modalState} setBackButtonState={setModalState} />
                </S.Header>
                <S.InputsContainer>{children}</S.InputsContainer>
                <S.ButtonsContainer>
                    <Button onClick={handleExitWithoutSaveClick} label="Sair sem aplicar" justifyText="center" variant={VariantButtonEnum.PRIMARY_TRANSPARENT} />
                    <Button onClick={handleExitAndSaveClick} label="Aplicar filtro" variant={VariantButtonEnum.SECONDARY} justifyText="center" />
                </S.ButtonsContainer>
            </S.Modal>
        </S.Container>
    )
}

export default BillsFilter;
