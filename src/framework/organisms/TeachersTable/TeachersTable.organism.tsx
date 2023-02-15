import React from 'react';
import {useNavigate} from "react-router-dom";
import * as S from "./TeachersTable.style";
import {TableRow, TableRowTitle} from "@molecules";
import {TeachersTableProps} from "@organisms/TeachersTable/TeachersTable.interface";
import {titleList, temp} from "@organisms/TeachersTable/TeachersTable.logic";

export const TeachersTable: React.FC<TeachersTableProps> = () => {
    const navigate = useNavigate();

    return (
        <S.Container>
            <TableRowTitle titles={titleList} />
            {temp.map((row, index) => (
                <TableRow index={index} fields={[{field: row.nomeProfessor, status: null}, {field: row.turma, status: null}, {field: row.periodo, status: null}]} status={row.status}
                          onEyeClick={() => navigate("/gestao-escolar/visualizar-professores/professor")}
                          onSwitchClick={() => {}}
                          onThrashClick={() => {}}
                />
            ))}
        </S.Container>
    );
}
