import React from "react";

import { InputInLabel } from "~/framework/molecules";

export const EditRegistrationDataModal:React.FC = () => {
    return(
        <React.Fragment>
            <InputInLabel label="Nome" onChange={() => console.log("tteste")} value="Junin" />
            <InputInLabel label="Período" onChange={() => console.log("tteste")} value="Junin" />
            <InputInLabel label="Ensino" onChange={() => console.log("tteste")} value="Junin" />
            <InputInLabel label="Vagas para Turma" onChange={() => console.log("tteste")} value="Junin" />
        </React.Fragment>
    )
}