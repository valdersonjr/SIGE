import React from 'react';

import * as S from './UsersTable.style';
import { useNavigate } from "react-router-dom";
import { TableRow, TableRowTitle } from "@molecules";
import { UsersTableProps } from "@organisms/UsersTable/UsersTable.interface";
import { titleList, temp } from "@organisms/UsersTable/UsersTable.logic";

export const UsersTable: React.FC<UsersTableProps> = ({ filters }) => {
    const navigate = useNavigate();

    let filteredData = temp;

    if (filters?.name !== "" && filters?.name) {
        filteredData = filteredData.filter((row) => {
            return row.nome.includes(filters.name);
        });
    }

    if (filters?.profile !== "" && filters?.profile) {
        filteredData = filteredData.filter((row) => {
            console.log(row.perfil, filters.profile);
            return row.perfil === filters.profile;
        });
    }

    if (filters?.status !== "" && filters?.status) {
        filteredData = filteredData.filter((row) => {
            return row.situacao === filters.status;
        });
    }

    return (
        <S.Container>
            <TableRowTitle titles={titleList} />
            {filteredData.map((row, index) => (
                <TableRow index={index} fields={[row.nome, row.perfil]} status={row.situacao}
                    onEyeClick={() => navigate("/gestao-escolar/visualizar-turmas/turma")}
                    onSwitchClick={() => { }}
                    onThrashClick={() => { }}
                />
            ))}
        </S.Container>
    );
};
