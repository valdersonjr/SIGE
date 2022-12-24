import React from "react";

import { InputInLabel } from "~/framework/molecules";

export const EditFinancialDataModal:React.FC = () => {
    return(
        <React.Fragment>
            <InputInLabel label="Valor mensalidade" onChange={() => console.log("tteste")} value="Junin" />
            <InputInLabel label="Valor Refeição" onChange={() => console.log("tteste")} value="Junin" />
            <InputInLabel label="Valor hora extra" onChange={() => console.log("tteste")} value="Junin" />
            <InputInLabel label="Valor Projeto nutricionista" onChange={() => console.log("tteste")} value="Junin" />
            <InputInLabel label="Valor Material didático" onChange={() => console.log("tteste")} value="Junin" />
            <InputInLabel label="Valor Material pedagógico" onChange={() => console.log("tteste")} value="Junin" />
        </React.Fragment>
    )
}