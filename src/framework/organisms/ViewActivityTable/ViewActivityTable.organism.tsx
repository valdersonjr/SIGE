import React from 'react';
import * as S from './ViewActivityTable.style';
import {ViewActivityTableProps} from "@organisms/ViewActivityTable/ViewActivityTable.interface";
import {TableRow, TableRowTitle} from "@molecules";
import {titleList} from "@organisms/ViewActivityTable/ViewActivityTable.logic";

export const ViewActivityTable: React.FC<ViewActivityTableProps> = ({data}) => {
    let filteredData = [];

    if (data) {
        filteredData = data.matriculados;
    }

    return (
        <S.Container>
            <TableRowTitle titles={titleList}/>
            {filteredData.map((row: any, index: any) => (
                <TableRow index={index} fields={[{field: row.aluno_nome, status: null}]}
                          onEyeClick={() => {
                          }}
                />
            ))}
        </S.Container>
    );
}
