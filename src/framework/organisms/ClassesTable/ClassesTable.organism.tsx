import React from "react";

import { useNavigate } from "react-router-dom";

import { TableRow, TableRowTitle } from "~/framework/molecules";

import { ClassesTableProps } from "./ClassesTable.interface";
import { titleList } from "./ClassesTable.logic";
import * as S from './ClassesTable.style';

const temp = [{
    aluno: 'Jardim I',
    periodo: 'Manhã',
    turma: '08:00 - 12:00',
    situacao: 'Ativo'
},
{
    aluno: 'Jardim I',
    periodo: 'Manhã',
    turma: '08:00 - 12:00',
    situacao: 'Ativo'
},
{
    aluno: 'Jardim I',
    periodo: 'Manhã',
    turma: '08:00 - 12:00',
    situacao: 'Ativo'
},
{
    aluno: 'Jardim I',
    periodo: 'Manhã',
    turma: '08:00 - 12:00',
    situacao: 'Ativo'
},
{
    aluno: 'Jardim I',
    periodo: 'Manhã',
    turma: '08:00 - 12:00',
    situacao: 'Ativo'
},
{
    aluno: 'Jardim I',
    periodo: 'Manhã',
    turma: '08:00 - 12:00',
    situacao: 'Ativo'
},
{
    aluno: 'Jardim I',
    periodo: 'Manhã',
    turma: '08:00 - 12:00',
    situacao: 'Ativo'
},
{
    aluno: 'Jardim I',
    periodo: 'Manhã',
    turma: '08:00 - 12:00',
    situacao: 'Ativo'
},
{
    aluno: 'Jardim I',
    periodo: 'Manhã',
    turma: '08:00 - 12:00',
    situacao: 'Ativo'
},
{
    aluno: 'Jardim I',
    periodo: 'Manhã',
    turma: '08:00 - 12:00',
    situacao: 'Ativo'
}];


export const ClassesTable: React.FC<ClassesTableProps> = () => {
    const navigate = useNavigate();

    return (
        <S.Container>
            <TableRowTitle title={titleList} />
            {temp.map((row, index) => (
                <TableRow index={index} aluno={row.aluno} periodo={row.periodo} turma={row.turma} situacao={row.situacao} onEyeClick={() => navigate("/gestao-escolar/visualizar-turmas/turma")} />
            ))}
        </S.Container>
    )
}