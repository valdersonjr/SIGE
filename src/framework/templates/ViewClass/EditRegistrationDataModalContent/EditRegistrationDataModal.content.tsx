import React, {useEffect, useState} from "react";

import { InputInLabel } from "~/framework/molecules";
import {SelectInLabel} from "@atoms";
import {ensinoOptions} from "~/utils/ensino-options";
import {
    EditRegistrationDataModelProps
} from "@templates/ViewClass/EditRegistrationDataModalContent/EditRegistrationDataModel.interface";
import {getPeriodsApiService} from "@service/api/period.service";

export const EditRegistrationDataModal:React.FC<EditRegistrationDataModelProps> = ({data, setData}) => {
    const [ensino, setEnsino] = useState();
    const [nome, setNome] = useState(data?.descricao);
    const [periodo, setPeriodo] = useState();
    const [periodoOptions, setPeriodoOptions] = useState<any[]>([]);

    useEffect(() => {
        getPeriodsApiService()
            .then((response: any) => {
                setPeriodoOptions([{label: '', value: ''}, ...response?.data?.map((it: any) => {
                    return {label: `${it?.descricao} - ${it?.horario_entrada} às ${it?.horario_saida}`, value: it?.id};
                })]);
            }).catch(err => console.error(err));
    }, []);

    useEffect(() => {
        if (!!ensino && !!periodo && nome.trim().length > 0) {
            setData({...data, ensino, descricao: nome, periodo_turma_id: Number(periodo) });
        }
    }, [ensino, nome, periodo]);

    useEffect(() => {
        console.log('enennenen', data);
    }, []);

    return(
        <React.Fragment>
            <SelectInLabel selectedValue={ensino} options={ensinoOptions} label="Ensino" onChange={(select: any) => setEnsino(select?.value)} />
            <InputInLabel label="Nome" onChange={setNome} value={nome} />
            <SelectInLabel selectedValue={periodo} options={periodoOptions} label="Período" onChange={(select: any) => setPeriodo(select?.value)} />
        </React.Fragment>
    )
}
