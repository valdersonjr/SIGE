import React from 'react';
import {RegisterUser} from "@templates/RegisterUser/RegisterUser.template";
import { IRegisterUser } from '~/models/dataview';

import { registerUserApiService } from "~/service/api"
import { useNavigate } from 'react-router-dom';

const RegisterUserPage: React.FC = () => {
    const navigate = useNavigate();

    const handleRegisterUser = async (user:IRegisterUser) => {
        user.phone = user.phone.replaceAll(" ", "");
        user.phone = user.phone.replace(")", "");
        user.phone = user.phone.replace("(", "");

        if(user.profile.length === 0) alert("Atenção! \nSelecione pelo menos um perfil.");
        else if(user.password.length < 6) alert("Senha inválida! \nSua senha precisa ter no mínimo 6 dígitos.");
        else if(user.confirmPassword !== user.password) alert("Atenção! \nAs senhas precisam ser iguais.");
  
        else {
            await registerUserApiService(user).then((response:any) => {
                if(response && response.message){
                    console.log(response.message);
                    alert("Ocorreu um erro ao cadastrar o usuário. \nTente novamente.");
                }
                else {
                    navigate(-1);
                }
            })
        }
    }

    return <RegisterUser handleSubmit={(user:IRegisterUser) => handleRegisterUser(user)} />;
}

export default RegisterUserPage;
