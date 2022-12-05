import React from "react";

import { useNavigate } from "react-router-dom";

import { StudentTableRow } from "~/framework/molecules";

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
            <StudentTableRow index={0} title={true} />
            {temp.map((row, index) => (
                <StudentTableRow index={index + 1} aluno={row.aluno} periodo={row.periodo} turma={row.turma} situacao={row.situacao} onEyeClick={() => navigate('/alunos/visualizar-aluno')} />
            ))}
        </S.Container>
    )
}