import React from 'react';

import { useNavigate } from 'react-router-dom';
import {ActivitiesTableProps} from "@organisms/ActivitiesTable/ActivitiesTable.interface";
import {TableRow, TableRowTitle} from "@molecules";
import * as S from "@organisms/ClassesTable/ClassesTable.style";
import {titleList} from "@organisms/ActivitiesTable/ActivitiesTable.logic";

export const ActivitiesTable: React.FC<ActivitiesTableProps> = ({data}) => {
    const navigate = useNavigate();

    let filteredData: any = data;

    return (
        <S.Container>
            <TableRowTitle titles={titleList} />
            {filteredData.map((row: any, index: number) => (
                <TableRow index={index} fields={[row.descricao, row.professor, row.periodo]} status={row.ativo ? "Ativo" : "Inativo"}
                          onEyeClick={() => navigate("/gestao-escolar/visualizar-atividades/atividade")}
                          onSwitchClick={() => {}}
                          onThrashClick={() => {}}
                />
            ))}
        </S.Container>
    );
};
