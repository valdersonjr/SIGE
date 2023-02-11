import React from 'react';
import {NewRegistration} from "@templates/NewRegistration/NewRegistration.template";
import {createRegistrationDataProps} from "@templates/NewRegistration/NewRegistration.interface";
import {createRegistrationApiService} from "@service/api";
import {useNavigate} from "react-router-dom";

const NewRegistrationPage: React.FC = () => {
    const navigate = useNavigate();

    const hasErrorsFormData = (data: createRegistrationDataProps): boolean => {
        return !data.ano || !data.turma_id || !data.aluno_id || !data.data_inicio ||
            !data.valor_matricula || !data.valor_mensalidade || !data.forma_pagamento_parcelas;
    }

    const save = (_e: React.SyntheticEvent, data: createRegistrationDataProps) => {
        if (hasErrorsFormData(data)) {
            console.error("Erros no formulário!");
            return;
        }

        createRegistrationApiService(data)
            .then(() => {
                navigate('/gestao-escolar/visualizar-matriculas');
            }).catch(err => console.error(err));
    }

    return <NewRegistration handleSubmit={save} />;
}

export default NewRegistrationPage;
