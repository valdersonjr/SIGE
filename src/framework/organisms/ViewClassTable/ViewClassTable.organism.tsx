import React from 'react';
import * as S from './ViewClassTable.style';
import {TableRow, TableRowTitle} from "@molecules";
import {ViewClassTableProps} from "@organisms/ViewClassTable/ViewClassTable.interface";
import {titleList} from "@organisms/ViewClassTable/ViewClassTable.logic";

export const ViewClassTable: React.FC<ViewClassTableProps> = ({students}) => {
    const getAnoMatriculas = (registers: any[]): string => {
        let ano_matriculas = '';

        registers.forEach((it: any, i: number) => {
            ano_matriculas += i + 1 === registers?.length ? `${it.ano}` : `${it.ano}, `;
        });

        return ano_matriculas;
    }

    return (
        <S.Container>
            <TableRowTitle titles={titleList}/>
            {students?.map((row, index) => (
                <TableRow index={index} fields={[{field: row.nome, status: null}, {
                    field: getAnoMatriculas(row?.matriculas),
                    status: null
                }]}
                          status={row.ativo ? 'Ativo' : 'Inativo'}/>
            ))}
        </S.Container>
    );
};
