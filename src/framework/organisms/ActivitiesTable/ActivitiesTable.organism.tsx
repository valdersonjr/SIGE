import React from 'react';

import { useNavigate } from 'react-router-dom';
import {ActivitiesTableProps} from "@organisms/ActivitiesTable/ActivitiesTable.interface";
import {TableRow, TableRowTitle} from "@molecules";
import {titleList} from "@organisms/ClassesTable/ClassesTable.logic";
import * as S from "@organisms/ClassesTable/ClassesTable.style";
import {temp} from "@organisms/ActivitiesTable/ActivitiesTable.logic";

export const ActivitiesTable: React.FC<ActivitiesTableProps> = () => {
    const navigate = useNavigate();

    return (
        <S.Container>
            <TableRowTitle title={titleList} />
            {temp.map((row, index) => (
                <TableRow index={index} aluno={row.atividade} periodo={row.professor}
                          turma={row.periodo} situacao={row.status}
                          onEyeClick={() => navigate("/gestao-escolar/visualizar-turmas/turma")}
                          onSwitchClick={() => {}}
                          onThrashClick={() => {}}
                />
            ))}
        </S.Container>
    );
};
