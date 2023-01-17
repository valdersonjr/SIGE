import React from 'react';

import * as S from './UsersTable.style';
import { useNavigate } from "react-router-dom";
import { TableRow, TableRowTitle } from "@molecules";
import { UsersTableProps } from "@organisms/UsersTable/UsersTable.interface";
import { titleList } from "@organisms/UsersTable/UsersTable.logic";
import { FetchUserResponse } from '~/models/datacore';

export const UsersTable: React.FC<UsersTableProps> = ({ filters, data }) => {
    const navigate = useNavigate();

    let filteredData:FetchUserResponse[] = [];

    if(data){
        filteredData = data;
    }

    if (filters?.name !== "" && filters?.name) {
        filteredData = filteredData.filter((row) => {
            return row.nome.toLocaleLowerCase().includes(filters.name);
        });
    }

    if (filters?.profile) {
        filteredData = filteredData.filter(row => {
            for(let k =  0; k < row.perfis.length; k = k+1){
                if(row.perfis[k].sigla === filters.profile){
                    return true;
                }
            }
        })
    }

    // if (filters?.status !== "" && filters?.status) {
    //     filteredData = filteredData.filter((row) => {
    //         return row.descricao_status === filters.status;
    //     });
    // }

    

    return (
        <S.Container>
            <TableRowTitle titles={titleList} />
            {filteredData.map((row, index) => (
                <TableRow index={index} fields={[row.nome]} profiles={row.perfis}
                    onEyeClick={() => navigate("/gestao-escolar/visualizar-turmas/turma")}
                    onSwitchClick={() => { }}
                    onThrashClick={() => { }}
                />
            ))}
        </S.Container>
    );
};
