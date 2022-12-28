import React from 'react';
import {useNavigate} from "react-router-dom";
import * as S from "./RegistrationsTable.style";
import {TableRow, TableRowTitle} from "@molecules";
import {RegistrationsTableProps} from "@organisms/RegistrationsTable/RegistrationsTable.interface";
import {titleList, temp} from "@organisms/RegistrationsTable/RegistrationsTable.logic";

export const RegistrationsTable: React.FC<RegistrationsTableProps> = () => {
    const navigate = useNavigate();

    return (
        <S.Container>
            <TableRowTitle titles={titleList} />
            {temp.map((row, index) => (
                <TableRow index={index} fields={[row.matricula, row.aluno, row.anoIngresso]} status={row.status}
                          onEyeClick={() => navigate("/gestao-escolar/visualizar-turmas/turma")}
                          onSwitchClick={() => {}}
                          onThrashClick={() => {}}
                />
            ))}
        </S.Container>
    );
}
