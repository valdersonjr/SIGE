import React, {useState} from "react";
import {
    EditRegisDataModelProps
} from "@templates/ViewRegistration/EditRegisDataModalContent/EditRegisDataModal.interface";
import {InputInLabel} from "@molecules";

export const EditRegisFormFourDataModal: React.FC<EditRegisDataModelProps> = ({data, setData}) => {
    const [valorRefeicao, setValorRefeicao] = useState(data?.preco_negociado?.valor_refeicao);
    const [valorProjetoNutricional, setValorProjetoNutricional] = useState(data?.preco_negociado?.valor_projeto_nutricional);
    const [valorMaterialDidatico, setValorMaterialDidatico] = useState(data?.preco_negociado?.valor_material_didatico);
    const [valorMaterialPedagogico, setValorMaterialPedagogico] = useState(data?.preco_negociado?.valor_material_pedagogico);

    return (
        <React.Fragment>
            <InputInLabel label="Valor refeição" value={valorRefeicao} placeholder="R$"
                          onChange={setValorRefeicao} type="currency" />
            <InputInLabel label="Valor material didático" value={valorMaterialDidatico} placeholder="R$"
                          onChange={setValorMaterialDidatico} type="currency" />
            <InputInLabel label="Valor material pedagógico" value={valorMaterialPedagogico} placeholder="R$"
                          onChange={setValorMaterialPedagogico} type="currency" />
            <InputInLabel label="Valor projeto nutricional" value={valorProjetoNutricional} placeholder="R$"
                          onChange={setValorProjetoNutricional} type="currency" />
        </React.Fragment>
    );
}
