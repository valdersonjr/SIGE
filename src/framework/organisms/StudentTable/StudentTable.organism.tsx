import React, {useEffect} from "react";

import { useNavigate } from "react-router-dom";

import { TableRow, TableRowTitle } from "~/framework/molecules";

import { titleList } from './StudentTable.logic';
import * as S from './StudentTable.style';
import {getStudentApiService} from "~/framework/pages/Students/student.service";

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
    // const [students, setStudents] = useState<GetStudentDto[]>([]);

    useEffect(() => {
        getStudentApiService().then(r => {
            console.log('funcionou', r);
        });
    }, []);

    return (
        <S.Container>
            <TableRowTitle titles={titleList} />
            {/*{students.map((row, index) => (*/}
            {/*    <TableRow index={index} fields={[row.nome, row.data_nascimento, row.email]} status={row.descricao_status}*/}
            {/*              onEyeClick={() => navigate('/alunos/visualizar-aluno')} />*/}
            {/*))}*/}
            {temp.map((row, index) => (
                <TableRow index={index} fields={[row.aluno, row.periodo, row.turma]} status={row.situacao}
                          onEyeClick={() => navigate('/alunos/visualizar-aluno')} />
            ))}
        </S.Container>
    )
}
