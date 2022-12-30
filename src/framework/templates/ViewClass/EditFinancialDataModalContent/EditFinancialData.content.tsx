import React from "react";

import { InputInLabel } from "~/framework/molecules";

export const EditFinancialDataModal:React.FC = () => {
    return(
        <React.Fragment>
            <InputInLabel label="Valor mensalidade" onChange={() => {}} value="Junin" />
            <InputInLabel label="Valor Refeição" onChange={() => {}} value="Junin" />
            <InputInLabel label="Valor hora extra" onChange={() => {}} value="Junin" />
            <InputInLabel label="Valor Projeto nutricionista" onChange={() => {}} value="Junin" />
            <InputInLabel label="Valor Material didático" onChange={() => {}} value="Junin" />
            <InputInLabel label="Valor Material pedagógico" onChange={() => {}} value="Junin" />
        </React.Fragment>
    )
}
