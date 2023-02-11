import React, {useEffect, useState} from "react";
import {
    EditRegisDataModelProps
} from "@templates/ViewRegistration/EditRegisDataModalContent/EditRegisDataModal.interface";
import {SelectInLabel} from "@atoms";
import {simOuNaoOptions} from "@templates/NewRegistration/NewRegistration.logic";

export const EditRegisFormTwoDataModal: React.FC<EditRegisDataModelProps> = ({data, setData}) => {
    const [divulgacaoDadosAutorizada, setDivulgacaoDadosAutorizada] = useState('FALSE');
    const [divulgacaoImagemRede, setDivulgacaoImagemRede] = useState('FALSE');
    const [optouAlmoco, setOptouAlmoco] = useState<any>();
    const [optouJantar, setOptouJantar] = useState<any>();

    useEffect(() => {
        console.log('form two', data)
        setUndefinedValuesToSave();
        setData({ ...data, divulgacaoDadosAutorizada, divulgacaoImagemRede, optouAlmoco, optouJantar });
    }, [divulgacaoDadosAutorizada, divulgacaoImagemRede, optouAlmoco, optouJantar]);

    const setUndefinedValuesToSave = () => {
        if (divulgacaoDadosAutorizada === undefined) setDivulgacaoDadosAutorizada(data?.divulgacaoDadosAutorizada);
        if (divulgacaoImagemRede === undefined) setDivulgacaoImagemRede(data?.divulgacaoImagemRede);
        if (optouAlmoco === undefined) setOptouAlmoco(data?.optouAlmoco);
        if (optouJantar === undefined) setOptouJantar(data?.optouJantar);
    }

    return (
        <React.Fragment>
            <SelectInLabel label="Autoriza divulgação de dados pessoais"
                           selectedValue={divulgacaoDadosAutorizada} onChange={(v: any) => setDivulgacaoDadosAutorizada(v.value)}
                           options={simOuNaoOptions} />
            <SelectInLabel label="Autoriza a divulgação de sua imagem nas redes sociais da escola"
                           selectedValue={divulgacaoImagemRede} onChange={(v: any) => setDivulgacaoImagemRede(v.value)}
                           options={simOuNaoOptions} />
            <SelectInLabel label="Almoço" selectedValue={optouAlmoco} onChange={(v: any) => setOptouAlmoco(v.value)}
                           options={simOuNaoOptions} />
            <SelectInLabel label="Jantar" selectedValue={optouJantar} onChange={(v: any) => setOptouJantar(v.value)}
                           options={simOuNaoOptions} />
        </React.Fragment>
    );
}
