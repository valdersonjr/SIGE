import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import * as S from './Users.style';
import { Banner } from "@molecules";
import { FormUserQuery } from '~/framework/organisms';
import { UsersPageBannerIcon } from "@atoms/Icons/UsersPageBanner.icon";
import { UsersTable } from "@organisms/UsersTable/UsersTable.organism";
import { UsersProps } from './Users.interface';


export const Users: React.FC<UsersProps> = ({users, reload, setReload}) => {
    const navigate = useNavigate();

    const [filters, setFilters] = useState({
        name: "",
        profile: "",
        status: ""
    });

    return (
        <S.Container>
            <Banner Icon={<UsersPageBannerIcon />} type="users" title='Usuários' text="Veja os usuários vinculados a sua escola, edite, adicione!" buttonLabel="Novo Usuário" onButtonClick={() => navigate("/usuarios/novo-usuario")} />
            <FormUserQuery setFilters={setFilters} />
            <UsersTable data={users} filters={filters} reload={reload} setReload={setReload} />
        </S.Container>
    );
}
