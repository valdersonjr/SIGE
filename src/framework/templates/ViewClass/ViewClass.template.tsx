import React, { useState } from "react";

import { DropdownHeader, Header } from "~/framework/molecules";
import { Dropdown } from "~/framework/organisms";
import { DropdownBody } from "~/framework/organisms/Dropdown/Dropdown.style";

import * as S from './ViewClass.style';

const ViewClass: React.FC = () => {
    return (
        <S.Container>
            <Header title="Turma" />
            <Dropdown title="Dados Cadastrais da Turma" ></Dropdown>
            <Dropdown title="Dados Financeirose2" ></Dropdown>
        </S.Container>
    )
}

export default ViewClass;