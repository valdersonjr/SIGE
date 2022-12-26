import React from 'react';
import {PeriodsFilterProps} from "./PeriodsFilter.interface";
import * as S from "./PeriodsFilter.style";
import {Header} from "@molecules";
import {Button, VariantButtonEnum} from "@atoms";

const PeriodsFilter: React.FC<PeriodsFilterProps> = ({title, children, modalState, setModalState}) => (
    <S.Container>
        <S.Modal>
            <S.Header>
                <Header title={title} backButtonState={modalState} setBackButtonState={setModalState} />
            </S.Header>
            <S.InputsContainer>{children}</S.InputsContainer>
            <S.ButtonsContainer>
                <Button onClick={() => setModalState && modalState ? setModalState(!modalState) : <></> } label="Sair sem aplicar" justifyText="center" variant={VariantButtonEnum.PRIMARY_TRANSPARENT} />
                <Button label="Aplicar filtro" variant={VariantButtonEnum.SECONDARY} justifyText="center" />
            </S.ButtonsContainer>
        </S.Modal>
    </S.Container>
);

export default PeriodsFilter;
