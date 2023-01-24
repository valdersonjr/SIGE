import React from 'react';
import {RegisterUser} from "@templates/RegisterUser/RegisterUser.template";
import { IRegisterUser } from '~/models/dataview';

import { registerUserApiService } from "~/service/api"

const RegisterUserPage: React.FC = () => {
    
    const handleRegisterUser = async (user:IRegisterUser) => {
        if(user.password.trim().length < 6){
            alert("Senha inválida! \nSua senha precisa ter no mínimo 6 dígitos.");
        }
        else if(user.confirmPassword !== user.password){
            alert("Atenção! \nAs senhas precisam ser iguais.")
        }
        else {
            await registerUserApiService(user).then(response => {
                console.info(response);
            });
        }
    }

    return <RegisterUser handleSubmit={(user:IRegisterUser) => handleRegisterUser(user)} />;
}

export default RegisterUserPage;
