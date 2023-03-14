import React from 'react';
import * as S from './UsersTable.style';
import {TableRow, TableRowTitle} from "@molecules";
import {UsersTableProps} from "@organisms/UsersTable/UsersTable.interface";
import {titleList} from "@organisms/UsersTable/UsersTable.logic";
import {activateUserApiService, inactivateUserApiService} from '~/service/api';
import {useNavigate} from 'react-router-dom';
import {NotFound} from "@organisms/NotFound/NotFound.organism";
import {Loading} from "@organisms/Loading/Loading.organism";

export const UsersTable: React.FC<UsersTableProps> = ({
                                                          data,
                                                          reload,
                                                          setReload,
                                                          setConfirmRemoveModal,
                                                          setIdToDelete,
                                                          filtersLoading
                                                      }) => {
    const navigate = useNavigate();

    const handleSwitchClick = (id: number, name: string, user: boolean) => {
        if (user) {
            inactivateUserApiService(id).then((response: any) => {
                if (response.message) alert(`Não foi possível inativar o usuário ${name}`);
                else setReload && setReload(!reload);
            })
        } else if (!user) {
            activateUserApiService(id).then((response: any) => {
                if (response.message) alert(`Não foi possível ativar o usuário ${name}`);
                else setReload && setReload(!reload);
            })
        }
    }

    const handleDelete = (id: any) => {
        setConfirmRemoveModal(true);
        setIdToDelete(id);
    }

    return (
        <S.Container>
            <TableRowTitle titles={titleList}/>
            {!filtersLoading ? (data.length === 0 ? <NotFound description="Nenhum usuário encontrado..." /> : (
                data.map((row, index) => {
                    let status = row.descricao_status === "Sim";
                    let statusNome = row.descricao_status === "Sim" ? "Ativo" : "Inativo";
                    return (
                        <React.Fragment key={row.id}>
                            <TableRow index={index} fields={[{field: row.nome, status: null}]} status={statusNome}
                                      profiles={row.perfis}
                                      switchValue={status}
                                      onEyeClick={() => navigate(`/usuarios/visualizar-usuario/${row.id}`)}
                                      onSwitchClick={() => row.ativo !== null && row.ativo !== undefined && handleSwitchClick(row.id, row.nome, row.ativo)}
                                      onThrashClick={() => handleDelete(row?.id)}/>
                        </React.Fragment>
                    )
                })
            )) : <Loading height="40vh" />}
        </S.Container>
    );
};
