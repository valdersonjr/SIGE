import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import {ActivitiesTableProps} from "@organisms/ActivitiesTable/ActivitiesTable.interface";
import {TableRow, TableRowTitle} from "@molecules";
import * as S from "@organisms/ClassesTable/ClassesTable.style";
import {titleList} from "@organisms/ActivitiesTable/ActivitiesTable.logic";
import { ResponseActivities } from '~/models/datacore';
import { deleteActivityApiService } from '~/service/api';

export const ActivitiesTable: React.FC<ActivitiesTableProps> = ({data, filters}) => {
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
                          onEyeClick={() => navigate("/gestao-escolar/visualizar-atividades/atividade")}
                          onSwitchClick={() => {}}
                          onThrashClick={() => handleDeleteActivity(row.id)}
                />
                )
            })}
        </S.Container>
    );
};
