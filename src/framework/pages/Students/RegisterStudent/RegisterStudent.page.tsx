import React from 'react';
import { RegisterStudent } from '~/framework/templates';
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {createStudentApiService} from "@service/api";

const RegisterStudentPage: React.FC = () => {
    const navigate = useNavigate();

    const save = (_e: React.SyntheticEvent, data: any) => {
        _e.preventDefault();

        toast.promise(
            () => handleSave(data),
            {
                pending: 'Carregando...',
                success: 'Aluno criado com sucesso!',
                error: 'Falha ao tentar criar aluno!'
            }
        ).then((res: any) => {
            if (!!res?.message) return toast.error(res?.message);

            navigate(-1);
        }).catch(err => toast.error(err));
    };

    const handleSave = (data: any) => new Promise((resolve, reject) => {
        createStudentApiService(data).then((res: any) => {
            if (!!res?.message) return reject(res?.message);

            resolve(true);
        }).catch(err => reject(err));
    });

    return <RegisterStudent handleSubmit={save} />;
}

export default RegisterStudentPage;
