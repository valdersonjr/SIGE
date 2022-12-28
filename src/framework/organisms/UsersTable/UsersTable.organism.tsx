import React from 'react';

import * as S from './UsersTable.style';
import {useNavigate} from "react-router-dom";
import {TableRow, TableRowTitle} from "@molecules";
import {UsersTableProps} from "@organisms/UsersTable/UsersTable.interface";
import {titleList, temp} from "@organisms/UsersTable/UsersTable.logic";

export const UsersTable: React.FC<UsersTableProps> = () => {
    const navigate = useNavigate();

    return (
        <S.Container>
            <TableRowTitle titles={titleList} />
            {temp.map((row, index) => (
                <TableRow index={index} fields={[row.nome, row.perfil]} status={row.situacao}
                          onEyeClick={() => navigate("/gestao-escolar/visualizar-turmas/turma")}
                          onSwitchClick={() => {}}
                          onThrashClick={() => {}}
                />
            ))}
        </S.Container>
    );
};
