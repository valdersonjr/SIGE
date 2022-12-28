import React from 'react';
import * as S from './ViewActivityTable.style';
import {ViewActivityTableProps} from "@organisms/ViewActivityTable/ViewActivityTable.interface";
import {TableRow, TableRowTitle} from "@molecules";
import {titleList, temp} from "@organisms/ViewActivityTable/ViewActivityTable.logic";

export const ViewActivityTable: React.FC<ViewActivityTableProps> = () => {
    return (
        <S.Container>
            <TableRowTitle titles={titleList} />
            {temp.map((row, index) => (
                <TableRow index={index} fields={[row.periodo, row.vagas]} status={row.status}
                          onEyeClick={() => {}}
                          onSwitchClick={() => {}}
                          onThrashClick={() => {}}
                />
            ))}
        </S.Container>
    );
}
