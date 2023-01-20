import React from 'react';

import * as S from './UsersTable.style';
import { TableRow, TableRowTitle } from "@molecules";
import { UsersTableProps } from "@organisms/UsersTable/UsersTable.interface";
import { titleList } from "@organisms/UsersTable/UsersTable.logic";
import { FetchUserResponse } from '~/models/datacore';
import { deleteUserApiService, updateUserApiService } from '~/service/api';

export const UsersTable: React.FC<UsersTableProps> = ({ filters, data, reload, setReload }) => {
    const [deletedIdArray, setDeletedIdArray] = React.useState<number[]>([]);

    let filteredData:FetchUserResponse[] = [];

    if(data){
        filteredData = data;
    }

    if (filters?.name !== "" && filters?.name) {
        filteredData = filteredData.filter((row) => {
            return row.nome.toLocaleLowerCase().includes(filters.name.toLocaleLowerCase());
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

    const handleUserDeletion = async (id:number) => {
        await deleteUserApiService(id).then(() => {
            setDeletedIdArray([...deletedIdArray, id]);
        });
    }

    const handleSwitchClick = (user: any) => {
        let status = user.descricao_status === "Sim" ? true : false;
        user.ativo = !status;
        updateUserApiService(user).then(() => setReload ? setReload(!reload) : null);
    }
    

    return (
        <S.Container>
            <TableRowTitle titles={titleList} />
            {filteredData.map((row, index) => {
                if(!deletedIdArray.includes(row.id)){
                    let status = row.descricao_status === "Sim" ? true : false;
                    let statusNome = row.descricao_status === "Sim" ? "Ativo" : "Inativo";
                    return (
                        <TableRow index={index} fields={[row.nome]} status={statusNome} profiles={row.perfis}
                            switchValue={status}
                            onEyeClick={() => {}}
                            onSwitchClick={() => handleSwitchClick(row)}
                            onThrashClick={() => handleUserDeletion(row.id)} />
                    )
                }
            })}
        </S.Container>
    );
};
