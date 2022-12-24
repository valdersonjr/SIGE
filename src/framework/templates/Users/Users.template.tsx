import React from 'react';

import { useNavigate } from 'react-router-dom';

import * as S from './Users.style';
import {Banner} from "@molecules";
import {FormUserQuery} from '~/framework/organisms';
import {UsersPageBannerIcon} from "@atoms/Icons/UsersPageBanner.icon";

export const Users: React.FC = () => {
    const navigate = useNavigate();

    return (
        <S.Container>
            <Banner Icon={<UsersPageBannerIcon />} type="users" title='Usuários' text="Veja os usuários vinculados a sua escola, edite, adicione!" buttonLabel="Novo Usuário" onButtonClick={() => navigate("/usuarios/novo-usuario")} />
            <FormUserQuery />
        </S.Container>
    );
}
