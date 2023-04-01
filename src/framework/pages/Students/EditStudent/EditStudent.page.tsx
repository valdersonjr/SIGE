import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {EditStudent} from "@templates/EditStudent/EditStudent.template";
import {getStudentByIdApiService, updateStudentApiService} from "@service/api";
import {toast} from "react-toastify";

// @ts-ignore
const EditStudentPage: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState();

    useEffect(() => {
        getStudentByIdApiService(Number(id))
            .then((res: any) => setData(res?.data))
            .catch(err => toast.error(err));
    }, []);

    const save = (_e: React.SyntheticEvent, data: any) => {
        _e.preventDefault();

        toast.promise(
            () => handleSave(),
            {
                pending: 'Carregando...',
                success: 'Aluno salvo com sucesso!',
                error: 'Falha ao tentar salvar aluno!'
            }
        ).then((res: any) => {
            if (!!res?.message) return toast.error(res?.message);

            updateStudentApiService(Number(id), data)
                .then((r: any) => {
                    if (!!r?.message) return toast.error(res?.message);
                    navigate(-1);
                }).catch(err => toast.error(err));
        }).catch(err => toast.error(err));
    }

    const handleSave = () => new Promise((resolve, reject) => {
        getStudentByIdApiService(Number(id))
            .then((res: any) => {
                if (!!res?.message) return reject(res?.message);

                resolve(true);
            }).catch(err => reject(err));
    });

    return !!data && <EditStudent handleSubmit={save} data={data} />;
}

export default EditStudentPage;
