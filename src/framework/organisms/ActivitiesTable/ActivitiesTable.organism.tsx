import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import {ActivitiesTableProps} from "@organisms/ActivitiesTable/ActivitiesTable.interface";
import {TableRow, TableRowTitle} from "@molecules";
import * as S from "@organisms/ClassesTable/ClassesTable.style";
import {titleList} from "@organisms/ActivitiesTable/ActivitiesTable.logic";
import { ResponseActivities } from '~/models/datacore';
import { deleteActivityApiService, updateActivityApiService } from '~/service/api';

export const ActivitiesTable: React.FC<ActivitiesTableProps> = ({data, filters, reload, setReload}) => {
    const navigate = useNavigate();
    const [deletedIndexArray, setDeletedIndexArray] = useState<number[]>([]);
    
    let filteredData: ResponseActivities[] = [];

    if(data){
        filteredData = data;
    }

    filteredData =  filteredData.filter((item) => {
        if(filters?.activity !== ""){
            return item.descricao === filters?.activity;
        }
        return filteredData;
    });

    filteredData =  filteredData.filter((item) => {
        console.log(item);
        if(filters?.status !== ""){
            let status = item.ativo ? "active" : "inactive";
            return status === filters?.status;
        }
        return filteredData;
    });

    const handleDeleteActivity = async (id:number) => {
        await deleteActivityApiService(id).then(response => {
            console.log(response);
            setDeletedIndexArray([...deletedIndexArray, id]);
        });
    }

    const handleActivityStatus = async (row:ResponseActivities) => {
        // console.log(row);
        row.ativo = !row.ativo;
        await updateActivityApiService(row).then(response =>  setReload ? setReload(!reload) : "");
    }

    return (
        <S.Container>
            <TableRowTitle titles={titleList} />
            {filteredData.map((row: ResponseActivities, index: number) => {
                for(const id of deletedIndexArray){
                    if(id === row.id){
                        return <></>
                    }
                } 

                return (
                    <TableRow index={index} fields={[row.descricao]} status={row.ativo ? "Ativo" : "Inativo"}
                          switchValue={row.ativo}
                          onEyeClick={() => navigate(`/gestao-escolar/visualizar-atividades/atividade/${row.id}`)}
                          onSwitchClick={() => handleActivityStatus(row)}
                          onThrashClick={() => handleDeleteActivity(row.id)}
                />
                )
            })}
        </S.Container>
    );
};