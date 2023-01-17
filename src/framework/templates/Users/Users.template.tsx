import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import * as S from './Users.style';
import { Banner } from "@molecules";
import { FormUserQuery } from '~/framework/organisms';
import { UsersPageBannerIcon } from "@atoms/Icons/UsersPageBanner.icon";
import { UsersTable } from "@organisms/UsersTable/UsersTable.organism";
import { getUsertsApiService } from '~/service/api';
import { datacore } from "~/models"

export const Users: React.FC = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState<datacore.FetchUserResponse[]>();

    const [filters, setFilters] = useState({
        name: "",
        profile: "",
        status: ""
    });
    
    console.log(filters);

    useEffect(() => {
        getUsertsApiService().then(response => {
            setUsers(response.data);
            console.log(response.data);
        }).catch(err => console.log(err));
    }, []);

    return (
        <S.Container>
            <Banner Icon={<UsersPageBannerIcon />} type="users" title='Usuários' text="Veja os usuários vinculados a sua escola, edite, adicione!" buttonLabel="Novo Usuário" onButtonClick={() => navigate("/usuarios/novo-usuario")} />
            <FormUserQuery setFilters={setFilters} />
            <UsersTable data={users} filters={filters} />
        </S.Container>
    );
}
