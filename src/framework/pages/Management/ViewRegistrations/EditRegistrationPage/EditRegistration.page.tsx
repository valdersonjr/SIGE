import React from "react";
import {useNavigate} from "react-router-dom";
import {EditRegistration} from "@templates/EditRegistration/EditRegistration.template";
import {putRegistrationApiService} from "@service/api";
import {editRegistrationDataProps} from "@templates/EditRegistration/EditRegistration.interface";
import {toast} from 'react-toastify';

const EditRegistrationPage: React.FC = () => {
    const navigate = useNavigate();

    const hasErrorsFormData = (data: editRegistrationDataProps): boolean => {
        return !data.ano || !data.turma_id || !data.aluno_id || !data.data_inicio ||
            !data.valor_matricula || !data.valor_mensalidade || !data.forma_pagamento_parcelas;
    }

    const save = (_e: React.SyntheticEvent, data: editRegistrationDataProps) => {
        toast.promise(
            () => handleSave(data),
            {
                pending: 'Carregando...',
                success: 'Matrícula salva com sucesso!',
                error: 'Falha ao tentar salvar matrícula!'
            }
        ).then(() => {}).catch(err => console.error('toast error:', err));
    }

    const handleSave = (data: editRegistrationDataProps) => new Promise((resolve, reject) => {
        if (hasErrorsFormData(data)) return reject("error saving a registration");

        putRegistrationApiService(data.id, data)
            .then(() => {
                resolve(true);
                navigate(`/gestao-escolar/visualizar-matriculas/matricula/${data.id}`);
            }).catch(err => reject(err));
    });

    return <EditRegistration handleSubmit={save} />
}

export default EditRegistrationPage;
