import React from "react";

import { TableRowTitleProps } from "./TableRowTitle.interface";
import * as S from "./TableRowTitle.style";

export const TableRowTitle: React.FC<TableRowTitleProps> = ({ title }) => {
    return (
        <S.Container>
            {title.map((item) => (
                <S.RowSection key={item.key}><S.Text>{item.data}</S.Text></S.RowSection>
            ))}
        </S.Container>
    )
}