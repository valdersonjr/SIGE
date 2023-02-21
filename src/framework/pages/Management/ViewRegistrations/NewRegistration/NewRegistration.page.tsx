import React from 'react';
import {NewRegistration} from "@templates/NewRegistration/NewRegistration.template";
import {createRegistrationDataProps} from "@templates/NewRegistration/NewRegistration.interface";
import {createRegistrationApiService} from "@service/api";
import {useNavigate} from "react-router-dom";
import {toast} from 'react-toastify';

const NewRegistrationPage: React.FC = () => {
    const navigate = useNavigate();

    const hasErrorsFormData = (data: createRegistrationDataProps): boolean => {
        return !data.ano || !data.turma_id || !data.aluno_id || !data.data_inicio ||
            !data.valor_matricula || !data.valor_mensalidade || !data.forma_pagamento_parcelas;
    }

    const save = (_e: React.SyntheticEvent, data: createRegistrationDataProps) => {
        _e.preventDefault();

        toast.promise(
            () => handleSave(data),
            {
                pending: 'Carregando...',
                success: 'Matrícula criada com sucesso!',
                error: 'Falha ao tentar criar matrícula!'
            }
        ).then((res: any) => {
            if (!!res?.message) return toast.error(res?.message);

            navigate(-1);
        }).catch(err => console.error('toast error:', err));
    }

    const handleSave = (data: createRegistrationDataProps) => new Promise((resolve, reject) => {
        if (hasErrorsFormData(data)) return reject("error saving a new registration");

        createRegistrationApiService(data)
            .then((res: any) => {
                if (!!res?.message) return reject("error saving a new registration");

                resolve(true);
            }).catch(err => reject(err));
    });

    return <NewRegistration handleSubmit={save} />;
}

export default NewRegistrationPage;
