import React from 'react';

import {Button, VariantButtonEnum} from "@atoms";
import {Header} from "@molecules";

import * as S from "./ImagePermissionsFilter.style";
import {ImagePermissionsFilterProps} from "./ImagePermissionsFilter.interface";


const ImagePermissionsFilter: React.FC<ImagePermissionsFilterProps> = ({title, children, modalState, setModalState, setFilters}) => {
    const handleExitWithoutSaveClick = (event:React.SyntheticEvent) => {
        event.preventDefault();
        setModalState && modalState && setModalState(!modalState);
        setFilters({year: '', class: '', studentsName: '', allowedImageDisclosure: false});
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
                    <Button onClick={handleExitWithoutSaveClick} justifyText="center" label="Sair sem aplicar" variant={VariantButtonEnum.PRIMARY_TRANSPARENT} />
                    <Button onClick={handleExitAndSaveClick} label="Aplicar filtro" variant={VariantButtonEnum.SECONDARY} justifyText="center" />
                </S.ButtonsContainer>
            </S.Modal>
        </S.Container>
    )
}

export default ImagePermissionsFilter;
