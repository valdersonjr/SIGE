import React, {useState} from "react";
import {
    EditRegisDataModelProps
} from "@templates/ViewRegistration/EditRegisDataModalContent/EditRegisDataModal.interface";
import {InputInLabel} from "@molecules";
import {SelectInLabel} from "@atoms";
import {formaPagamentoOptions} from "@templates/NewRegistration/NewRegistration.logic";

export const EditRegisFormThreeDataModal: React.FC<EditRegisDataModelProps> = ({data, setData}) => {
    const [valorMatricula, setValorMatricula] = useState('');
    const [valorMensalidade, setValorMensalidade] = useState('');
    const [valorHoraExtra, setValorHoraExtra] = useState('');
    const [formaPagamentoParcelas, setFormaPagamentoParcelas] = useState('');

    return (
        <React.Fragment>
            <InputInLabel label="Valor matrícula *" placeholder="R$" type="currency"
                          value={valorMatricula} onChange={setValorMatricula} />
            <InputInLabel label="Valor mensalidade *" value={valorMensalidade} placeholder="R$"
                          onChange={setValorMensalidade} type="currency" />
            <InputInLabel label="Valor hora extra" value={valorHoraExtra} placeholder="R$"
                          onChange={setValorHoraExtra} type="currency" />
            <SelectInLabel label="Forma de pagamento *" options={formaPagamentoOptions}
                           selectedValue={formaPagamentoParcelas} onChange={(v: any) => setFormaPagamentoParcelas(v.value)} />
        </React.Fragment>
    );
}
