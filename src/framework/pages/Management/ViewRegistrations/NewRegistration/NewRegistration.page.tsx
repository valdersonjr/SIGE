import React from 'react';
import {NewRegistration} from "@templates/NewRegistration/NewRegistration.template";
import {useNavigate} from "react-router-dom";
import {createRegistrationDataProps} from "@templates/NewRegistration/NewRegistration.interface";

const NewRegistrationPage: React.FC = () => {
    const navigate = useNavigate();

    const hasErrorsFormData = (data: createRegistrationDataProps): boolean => {
        return !data.ano || !data.turma_id || !data.aluno_id || !data.data_inicio ||
            !data.valor_matricula || !data.valor_mensalidade || !data.forma_pagamento_parcelas;
    }

    const save = (_e: React.SyntheticEvent, data: createRegistrationDataProps) => {
        console.log(data);

        if (hasErrorsFormData(data)) {
            console.error("Erros no formulário!");
            return;
        }

        console.info("Deu certo!");
    }



    return <NewRegistration handleSubmit={save} />;
}

export default NewRegistrationPage;
