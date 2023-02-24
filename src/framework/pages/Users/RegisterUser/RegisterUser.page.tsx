import React from 'react';
import {RegisterUser} from "@templates/RegisterUser/RegisterUser.template";
import { registerUserApiService } from "~/service/api"
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify";

const RegisterUserPage: React.FC = () => {
    const navigate = useNavigate();

    const save = (_e: React.SyntheticEvent, data: any) => {
        _e.preventDefault();

        data.telefone = data.telefone.replaceAll(" ", "");
        data.telefone = data.telefone.replace(")", "");
        data.telefone = data.telefone.replace("(", "");
        if (data.telefone.length !== 11) return toast.error("Atenção \nTelefone inválido");
        if (data.perfis.length === 0) return toast.error("Atenção! \nSelecione pelo menos um perfil.");
        if (data.senha.length < 6) return toast.error("Senha inválida! \nSua senha precisa ter no mínimo 6 dígitos.");
        if (data.confirmaSenha !== data.senha) return toast.error("Atenção! \nAs senhas precisam ser iguais.");

        toast.promise(
            () => handleSave(data),
            {
                pending: 'Carregando...',
                success: 'Usuário criado com sucesso!',
                error: 'Falha ao tentar criar usuário!'
            }
        ).then((res: any) => {
            if (!!res?.message) return toast.error(res?.message);

            navigate(-1);
        }).catch(err => toast.error(err));
    }

    const handleSave = (data: any) => new Promise((resolve, reject) => {
        registerUserApiService(data)
            .then((res: any) => {
                if (!!res?.message) return reject(res?.message);

                resolve(true);
            }).catch(err => reject(err));
    });

    return <RegisterUser handleSubmit={save} />;
}

export default RegisterUserPage;
