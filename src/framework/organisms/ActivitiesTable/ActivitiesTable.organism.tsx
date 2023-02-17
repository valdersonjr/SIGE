import React from 'react';

import {useNavigate} from 'react-router-dom';
import {ActivitiesTableProps} from "@organisms/ActivitiesTable/ActivitiesTable.interface";
import {TableRow, TableRowTitle} from "@molecules";
import * as S from "@organisms/ClassesTable/ClassesTable.style";
import {titleList} from "@organisms/ActivitiesTable/ActivitiesTable.logic";
import {ResponseActivities} from '~/models/datacore';
import {activeActivityApiService, inactiveActivityApiService} from '~/service/api';
import {toast} from "react-toastify";
import {Loading} from "@organisms/Loading/Loading.organism";
import {NotFound} from "@organisms/NotFound/NotFound.organism";

export const ActivitiesTable: React.FC<ActivitiesTableProps> = ({
                                                                    data,
                                                                    reload,
                                                                    setReload,
                                                                    setConfirmRemoveModal,
                                                                    setIdToDelete,
                                                                    filtersLoading
                                                                }) => {
    const navigate = useNavigate();

    const handleActivityStatus = async (row: ResponseActivities) => {
        if (row.ativo) {
            await inactiveActivityApiService(row.id)
                .then((res: any) => {
                    if (!!res?.message) return toast.error(res?.message);

                    setReload(!reload);
                }).catch(err => toast.error(err));
        } else {
            await activeActivityApiService(row.id)
                .then((res: any) => {
                    if (!!res?.message) return toast.error(res?.message);

                    setReload(!reload);
                }).catch(err => toast.error(err));
        }
    }

    const handleDelete = (id: any) => {
        setConfirmRemoveModal(true);
        setIdToDelete(id);
    }

    return (
        <S.Container>
            <TableRowTitle titles={titleList}/>
            {!filtersLoading ? (data.length === 0 ? <NotFound
                description="Nenhuma atividade encontrada..."/> : data.map((row: ResponseActivities, index: number) => (
                    <TableRow index={index} fields={[{field: row?.descricao, status: null}]}
                              status={row.ativo ? "Ativo" : "Inativo"}
                              switchValue={row.ativo}
                              onEyeClick={() => navigate(`/gestao-escolar/visualizar-atividades/atividade/${row.id}`)}
                              onSwitchClick={() => handleActivityStatus(row)}
                              onThrashClick={() => handleDelete(row.id)}
                    />
                )
            )) : <Loading height="40vh"/>}
            {}
        </S.Container>
    );
};
