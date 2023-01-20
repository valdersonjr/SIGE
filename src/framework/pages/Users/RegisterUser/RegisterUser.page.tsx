import React from 'react';
import {RegisterUser} from "@templates/RegisterUser/RegisterUser.template";
import { IRegisterUser } from '~/models/dataview';

const RegisterUserPage: React.FC = () => {
    
    const handleRegisterUser = (user:IRegisterUser) => {
        
    }

    return <RegisterUser handleSubmit={(user:any) => handleRegisterUser(user)} />;
}

export default RegisterUserPage;
