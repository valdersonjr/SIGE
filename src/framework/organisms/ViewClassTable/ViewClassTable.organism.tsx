import React from 'react';
import {useNavigate} from "react-router-dom";
import * as S from './ViewClassTable.style';
import {TableRow, TableRowTitle} from "@molecules";
import {ViewClassTableProps} from "@organisms/ViewClassTable/ViewClassTable.interface";
import {titleList, temp} from "@organisms/ViewClassTable/ViewClassTable.logic";

export const ViewClassTable: React.FC<ViewClassTableProps> = () => {
    const navigate = useNavigate();

    return (
        <S.Container>
            <TableRowTitle titles={titleList} />
            {temp.map((row, index) => (
                <TableRow index={index} fields={[row.aluno]} status={row.situacao}
                          onEyeClick={() => navigate("/gestao-escolar/visualizar-turmas/turma")}
                          onSwitchClick={() => {}}
                          onThrashClick={() => {}}
                />
            ))}
        </S.Container>
    );
};
