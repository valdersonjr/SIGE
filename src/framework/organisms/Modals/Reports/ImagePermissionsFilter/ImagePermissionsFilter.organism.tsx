import React from 'react';
import {ImagePermissionsFilterProps} from "./ImagePermissionsFilter.interface";
import * as S from "./ImagePermissionsFilter.style";
import {Header} from "@molecules";
import {Button, VariantButtonEnum} from "@atoms";

const ImagePermissionsFilter: React.FC<ImagePermissionsFilterProps> = ({title, children, modalState, setModalState}) => (
    <S.Container>
        <S.Modal>
            <S.Header>
                <Header title={title} backButtonState={modalState} setBackButtonState={setModalState} />
            </S.Header>
            <S.InputsContainer>{children}</S.InputsContainer>
            <S.ButtonsContainer>
                <Button onClick={() => setModalState && modalState ? setModalState(!modalState) : <></> } justifyText="center" label="Sair sem aplicar" variant={VariantButtonEnum.PRIMARY_TRANSPARENT} />
                <Button label="Aplicar filtro" variant={VariantButtonEnum.SECONDARY} justifyText="center" />
            </S.ButtonsContainer>
        </S.Modal>
    </S.Container>
);

export default ImagePermissionsFilter;
