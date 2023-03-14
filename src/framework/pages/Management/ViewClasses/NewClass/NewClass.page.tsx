import React from 'react';
import { NewClass } from "@templates/NewClass/NewClass.template";
import {
    createClassDataProps
} from '~/framework/templates/NewClass/NewClass.interface';
import { createClassApiService } from '~/service/api';
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify";

const NewClassPage: React.FC = () => {
    const navigate = useNavigate();

    const save = (_e: React.SyntheticEvent, data: createClassDataProps) => {
        _e.preventDefault();

        toast.promise(
            () => handleSave(data),
            {
                pending: 'Carregando...',
                success: 'Turma criada com sucesso!',
                error: 'Falha ao tentar criar turma!'
            }
        ).then(() => {}).catch(err => toast.error(err));
    }

    const handleSave = (data: createClassDataProps) => new Promise((resolve, reject) => {
        createClassApiService(data)
            .then((response: any) => {
                if (!!response?.message) return reject("error saving a new class");

                navigate(-1);
                resolve(true);
            }).catch(err => reject(err));
    });

    return <NewClass handleSubmit={save} />
}

export default NewClassPage;
