import React from 'react';

import { useNavigate } from 'react-router-dom';
import {ActivitiesTableProps} from "@organisms/ActivitiesTable/ActivitiesTable.interface";
import {TableRow, TableRowTitle} from "@molecules";
import * as S from "@organisms/ClassesTable/ClassesTable.style";
import {temp, titleList} from "@organisms/ActivitiesTable/ActivitiesTable.logic";

export const ActivitiesTable: React.FC<ActivitiesTableProps> = () => {
    const navigate = useNavigate();

    return (
        <S.Container>
            <TableRowTitle titles={titleList} />
            {temp.map((row, index) => (
                <TableRow index={index} fields={[row.atividade, row.professor, row.periodo]} status={row.status}
                          onEyeClick={() => navigate("/gestao-escolar/visualizar-atividades/atividade")}
                          onSwitchClick={() => {}}
                          onThrashClick={() => {}}
                />
            ))}
        </S.Container>
    );
};
