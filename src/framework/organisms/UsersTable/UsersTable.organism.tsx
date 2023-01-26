import React from 'react';

import * as S from './UsersTable.style';
import { TableRow, TableRowTitle } from "@molecules";
import { UsersTableProps } from "@organisms/UsersTable/UsersTable.interface";
import { titleList } from "@organisms/UsersTable/UsersTable.logic";
import { FetchUserResponse } from '~/models/datacore';
import { deleteUserApiService, updateUserApiService } from '~/service/api';
import { useNavigate } from 'react-router-dom';

export const UsersTable: React.FC<UsersTableProps> = ({ filters, data, reload, setReload }) => {
    const navigate = useNavigate();
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

    if (filters?.status) {
        filteredData = filteredData.filter((row) => {
            return row.ativo === (filters.status === "Ativo" ?  true : false);
        });
    }

    const handleUserDeletion = async (id:number, name:string) => {
        await deleteUserApiService(id).then((response:any) => {
            if(response.message){
                alert(`Não foi possível excluir o usuário ${name}`);
            }
            else {
                setDeletedIdArray([...deletedIdArray, id]);
            }
        });
    }

    const handleSwitchClick = (user: FetchUserResponse) => {
        user.ativo = !(user.ativo);
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
                        <React.Fragment key={row.id}>
                            <TableRow index={index} fields={[row.nome]} status={statusNome} profiles={row.perfis}
                            switchValue={status}
                            onEyeClick={() => navigate(`/usuarios/visualizar-usuario/${row.id}`)}
                            onSwitchClick={() => handleSwitchClick(row)}
                            onThrashClick={() => handleUserDeletion(row.id, row.nome)} />
                        </React.Fragment>
                    )
                }
                return <></>
            })}
        </S.Container>
    );
};
