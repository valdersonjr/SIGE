import React from "react";

import { useNavigate } from "react-router-dom";

import { TableRow, TableRowTitle } from "~/framework/molecules";
import { ClassFilter } from "~/models/dataview";

import { ClassesTableProps } from "./ClassesTable.interface";
import { titleList } from "./ClassesTable.logic";
import * as S from './ClassesTable.style';

const temp = [{
    class: 'Jardim I',
    period: 'Manhã',
    schedule: '08:00 - 12:00',
    status: 'Ativo'
},
{
    class: 'Jardim I',
    period: 'Manhã',
    schedule: '08:00 - 12:00',
    status: 'Ativo'
},
{
    class: 'Jardim I',
    period: 'Manhã',
    schedule: '08:00 - 12:00',
    status: 'Ativo'
},
{
    class: 'Jardim I',
    period: 'Manhã',
    schedule: '08:00 - 12:00',
    status: 'Ativo'
},
{
    class: 'Jardim I',
    period: 'Manhã',
    schedule: '08:00 - 12:00',
    status: 'Ativo'
},
{
    class: 'Jardim I',
    period: 'Manhã',
    schedule: '08:00 - 12:00',
    status: 'Ativo'
},
{
    class: 'Jardim I',
    period: 'Manhã',
    schedule: '08:00 - 12:00',
    status: 'Ativo'
},
{
    class: 'Jardim I',
    period: 'Manhã',
    schedule: '08:00 - 12:00',
    status: 'Ativo'
},
{
    class: 'Jardim I',
    period: 'Manhã',
    schedule: '08:00 - 12:00',
    status: 'Ativo'
},
{
    class: 'Jardim I',
    period: 'Manhã',
    schedule: '08:00 - 12:00',
    status: 'Ativo'
}];


export const ClassesTable: React.FC<ClassesTableProps> = ({ filters }) => {
    const navigate = useNavigate();

    let filteredTemp:ClassFilter[] = temp;

    
    if(filters.class !== "" && filters.class) {
        filteredTemp = filteredTemp.filter((row) => {
            return row.class === filters.class;
        });
    }

    if(filters.period !== "" && filters.period) {
        filteredTemp = filteredTemp.filter((row) => {
            return row.period === filters.period;
        });
    }

    if(filters.schedule !== "" && filters.schedule) {
        filteredTemp = filteredTemp.filter((row) => {
            return row.schedule === filters.schedule;
        });
    }

    if(filters.status !== "" && filters.status) {
        filteredTemp = filteredTemp.filter((row) => {
            return row.status === filters.status;
        });
    }
    
    return (
        <S.Container>
            <TableRowTitle titles={titleList} />
            {filteredTemp.map((row, index) => (
                <TableRow index={index} fields={[row.class, row.period, row.schedule]} status={row.status}
                          onEyeClick={() => navigate("/gestao-escolar/visualizar-turmas/turma")} />
            ))}
        </S.Container>
    )
}
