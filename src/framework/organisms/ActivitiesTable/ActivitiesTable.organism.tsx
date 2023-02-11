import React  from 'react';

import { useNavigate } from 'react-router-dom';
import {ActivitiesTableProps} from "@organisms/ActivitiesTable/ActivitiesTable.interface";
import {TableRow, TableRowTitle} from "@molecules";
import * as S from "@organisms/ClassesTable/ClassesTable.style";
import {titleList} from "@organisms/ActivitiesTable/ActivitiesTable.logic";
import { ResponseActivities } from '~/models/datacore';
import {activeActivityApiService, inactiveActivityApiService} from '~/service/api';

export const ActivitiesTable: React.FC<ActivitiesTableProps> = ({data, reload, setReload, setConfirmRemoveModal, confirmRemoveModal, setIdToDelete}) => {
    const navigate = useNavigate();

    const handleActivityStatus = async (row: ResponseActivities) => {
        if (row.ativo) {
            await inactiveActivityApiService(row.id)
                .then(() => setReload && setReload(!reload))
                .catch(err => console.error(err));
        } else {
            await activeActivityApiService(row.id)
                .then(() => setReload && setReload(!reload))
                .catch(err => console.error(err));
        }
    }

    return (
        <S.Container>
            <TableRowTitle titles={titleList} />
            {data.map((row: ResponseActivities, index: number) => {
                return (
                    <TableRow index={index} fields={[row.descricao]} status={row.ativo ? "Ativo" : "Inativo"}
                          switchValue={row.ativo}
                          onEyeClick={() => navigate(`/gestao-escolar/visualizar-atividades/atividade/${row.id}`)}
                          onSwitchClick={() => handleActivityStatus(row)}
                          onThrashClick={() => {
                            setConfirmRemoveModal(!confirmRemoveModal);
                            setIdToDelete(row.id);
                          }}
                    />
                )
            })}
        </S.Container>
    );
};
