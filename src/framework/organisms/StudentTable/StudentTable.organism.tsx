import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { TableRow, TableRowTitle } from "~/framework/molecules";

import { StudentTableProps } from "./StudentTable.interface";
import { titleList } from './StudentTable.logic';
import * as S from './StudentTable.style';

import { getStudentApiService } from "~/framework/pages/Students/student.service";

const temp = [{
    name: 'Maria',
    period: 'Período',
    class: 'Berçário',
    situation: 'Ativo'
},
{
    name: 'Maria',
    period: 'Período',
    class: 'Berçário',
    situation: 'Desativado'
},
{
    name: 'Maria',
    period: 'Período',
    class: 'Berçário',
    situation: 'Pendência'
},
{
    name: 'Maria',
    period: 'Período',
    class: 'Berçário',
    situation: 'Indisponível'
},
{
    name: 'Maria',
    period: 'Período',
    class: 'Berçário',
    situation: 'Nao existe'
},
{
    name: 'Maria',
    period: 'Período',
    class: 'Berçário',
    situation: 'Ativo'
},
{
    name: 'Maria',
    period: 'Período',
    class: 'Berçário',
    situation: 'Ativo'
}, {
    name: 'Maria',
    period: 'Período',
    class: 'Berçário',
    situation: 'Ativo'
}, {
    name: 'Maria',
    period: 'Período',
    class: 'Berçário',
    situation: 'Ativo'
}, {
    name: 'Maria',
    period: 'Período',
    class: 'Berçário',
    situation: 'Ativo'
}, {
    name: 'Maria',
    period: 'Período',
    class: 'Berçário',
    situation: 'Ativo'
}];

export const StudentTable: React.FC<StudentTableProps> = ({ filters }) => {
    const navigate = useNavigate();
    // const [students, setStudents] = useState<GetStudentDto[]>([]);

    let filteredData = temp;

    if (filters.name !== "" && filters.name) {
        filteredData = filteredData.filter((row) => {
            return row.name === filters.name;
        });
    }

    if (filters.class !== "" && filters.class) {
        filteredData = filteredData.filter((row) => {
            return row.class === filters.class;
        });
    }

    if (filters.period !== "" && filters.period) {
        filteredData = filteredData.filter((row) => {
            return row.period === filters.period;
        });
    }

    if (filters.situation !== "" && filters.situation) {
        filteredData = filteredData.filter((row) => {
            return row.situation === filters.situation;
        });
    }

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
            {filteredData.map((row, index) => (
                <TableRow index={index} fields={[row.name, row.period, row.class]} status={row.situation}
                    onEyeClick={() => navigate('/alunos/visualizar-aluno')} />
            ))}
        </S.Container>
    )
}
