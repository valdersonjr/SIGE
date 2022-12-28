import React from "react";

import { useNavigate } from "react-router-dom";

import { TableRow, TableRowTitle } from "~/framework/molecules";

import { titleList } from './StudentTable.logic';
import * as S from './StudentTable.style';

const temp = [{
    aluno: 'Maria',
    periodo: 'Período',
    turma: 'Berçário',
    situacao: 'Ativo'
},
{
    aluno: 'Maria',
    periodo: 'Período',
    turma: 'Berçário',
    situacao: 'Desativado'
},
{
    aluno: 'Maria',
    periodo: 'Período',
    turma: 'Berçário',
    situacao: 'Pendência'
},
{
    aluno: 'Maria',
    periodo: 'Período',
    turma: 'Berçário',
    situacao: 'Indisponível'
},
{
    aluno: 'Maria',
    periodo: 'Período',
    turma: 'Berçário',
    situacao: 'Nao existe'
},
{
    aluno: 'Maria',
    periodo: 'Período',
    turma: 'Berçário',
    situacao: 'Ativo'
},
{
    aluno: 'Maria',
    periodo: 'Período',
    turma: 'Berçário',
    situacao: 'Ativo'
}, {
    aluno: 'Maria',
    periodo: 'Período',
    turma: 'Berçário',
    situacao: 'Ativo'
}, {
    aluno: 'Maria',
    periodo: 'Período',
    turma: 'Berçário',
    situacao: 'Ativo'
}, {
    aluno: 'Maria',
    periodo: 'Período',
    turma: 'Berçário',
    situacao: 'Ativo'
}, {
    aluno: 'Maria',
    periodo: 'Período',
    turma: 'Berçário',
    situacao: 'Ativo'
}];

export const StudentTable: React.FC = () => {
    const navigate = useNavigate();

    return (
        <S.Container>
            <TableRowTitle titles={titleList} />
            {temp.map((row, index) => (
                <TableRow index={index} fields={[row.aluno, row.periodo, row.turma]} status={row.situacao}
                          onEyeClick={() => navigate('/alunos/visualizar-aluno')} />
            ))}
        </S.Container>
    )
}
