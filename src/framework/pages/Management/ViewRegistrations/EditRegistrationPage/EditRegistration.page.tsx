import React from "react";
import {useNavigate} from "react-router-dom";
import {EditRegistration} from "@templates/EditRegistration/EditRegistration.template";
import {putRegistrationApiService} from "@service/api";
import {editRegistrationDataProps} from "@templates/EditRegistration/EditRegistration.interface";

const EditRegistrationPage: React.FC = () => {
    const navigate = useNavigate();

    const hasErrorsFormData = (data: editRegistrationDataProps): boolean => {
        return !data.ano || !data.turma_id || !data.aluno_id || !data.data_inicio ||
            !data.valor_matricula || !data.valor_mensalidade || !data.forma_pagamento_parcelas;
    }

    const save = (_e: React.SyntheticEvent, data: editRegistrationDataProps) => {
        if (hasErrorsFormData(data)) {
            console.error("Erros no formulário!");
            return;
        }

        putRegistrationApiService(data.id, data)
            .then(() => {
                navigate(`/gestao-escolar/visualizar-matriculas/matricula/${data.id}`);
            }).catch(err => console.error(err));
    }

    return <EditRegistration handleSubmit={save} />
}

export default EditRegistrationPage;
