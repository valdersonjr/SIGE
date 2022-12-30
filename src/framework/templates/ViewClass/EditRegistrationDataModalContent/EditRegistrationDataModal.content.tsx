import React from "react";

import { InputInLabel } from "~/framework/molecules";

export const EditRegistrationDataModal:React.FC = () => {
    return(
        <React.Fragment>
            <InputInLabel label="Nome" onChange={() => {}} value="Junin" />
            <InputInLabel label="Período" onChange={() => {}} value="Junin" />
            <InputInLabel label="Ensino" onChange={() => {}} value="Junin" />
            <InputInLabel label="Vagas para Turma" onChange={() => {}} value="Junin" />
        </React.Fragment>
    )
}
