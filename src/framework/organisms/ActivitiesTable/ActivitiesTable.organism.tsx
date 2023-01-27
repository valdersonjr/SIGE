import React  from 'react';

import { useNavigate } from 'react-router-dom';
import {ActivitiesTableProps} from "@organisms/ActivitiesTable/ActivitiesTable.interface";
import {TableRow, TableRowTitle} from "@molecules";
import * as S from "@organisms/ClassesTable/ClassesTable.style";
import {titleList} from "@organisms/ActivitiesTable/ActivitiesTable.logic";
import { ResponseActivities } from '~/models/datacore';
import {activeActivityApiService, inactiveActivityApiService} from '~/service/api';

export const ActivitiesTable: React.FC<ActivitiesTableProps> = ({data, filters, reload, setReload, setConfirmRemoveModal, confirmRemoveModal, setIdToDelete}) => {
    const navigate = useNavigate();
    
    let filteredData: ResponseActivities[] = [];

    if(data){
        filteredData = data;
    }

    filteredData =  filteredData.filter((item) => {
        if(filters && filters?.activity !== ""){
            return item.descricao.includes(filters.activity);
        }
        return filteredData;
    });

    filteredData =  filteredData.filter((item) => {
        if(filters?.status !== ""){
            let status = item.ativo ? "active" : "inactive";
            return status === filters?.status;
        }
        return filteredData;
    });

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
            {filteredData.map((row: ResponseActivities, index: number) => {
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
