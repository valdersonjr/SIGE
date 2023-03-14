import React  from 'react';
import {NewActivity} from "@templates/NewActivity/NewActivity.template";
import { createActivityApiService } from '~/service/api/activity.service';
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify";

const NewActivityPage: React.FC = () => {

    const navigate = useNavigate();

    const save = async (_e: React.SyntheticEvent, data: any) => {
        _e.preventDefault();

        toast.promise(
            () => handleSave(data),
            {
                pending: 'Carregando...',
                success: 'Atividade criada com sucesso!',
                error: 'Falha ao tentar criar atividade!'
            }
        ).then(() => {}).catch(err => toast.error(err));
    }

    const handleSave = (data: any) => new Promise((resolve, reject) => {
        if (data?.description.trim().length <= 0) return reject("error saving a new activity");

        createActivityApiService(data?.description)
            .then((response: any) => {
                if (!!response?.message) return reject("error saving a new activity");

                resolve(true);
                navigate(-1);
            }).catch(err => reject(err));
    });

    return <NewActivity handleSubmit={save} />
}

export default NewActivityPage;
