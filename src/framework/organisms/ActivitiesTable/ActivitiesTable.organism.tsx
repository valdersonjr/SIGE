import React from 'react';

import { useNavigate } from 'react-router-dom';
import {ActivitiesTableProps} from "@organisms/ActivitiesTable/ActivitiesTable.interface";
import {TableRow, TableRowTitle} from "@molecules";
import * as S from "@organisms/ClassesTable/ClassesTable.style";
import {titleList} from "@organisms/ActivitiesTable/ActivitiesTable.logic";
import { ResponseActivities } from '~/models/datacore';

export const ActivitiesTable: React.FC<ActivitiesTableProps> = ({data, filters}) => {
    const navigate = useNavigate();
    
    let filteredData: ResponseActivities[] = [];

    console.log(filters);

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

    return (
        <S.Container>
            <TableRowTitle titles={titleList} />
            {filteredData.map((row: any, index: number) => (
                <TableRow index={index} fields={[row.descricao]} status={row.ativo ? "Ativo" : "Inativo"}
                          onEyeClick={() => navigate("/gestao-escolar/visualizar-atividades/atividade")}
                          onSwitchClick={() => {}}
                          onThrashClick={() => {}}
                />
            ))}
        </S.Container>
    );
};
