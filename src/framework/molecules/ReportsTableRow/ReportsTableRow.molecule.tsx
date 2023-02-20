import { ReportsTableRowProps } from './ReportsTableRow.interface';
import * as S from './ReportsTableTow.style';

const ReportsTableRow:React.FC<ReportsTableRowProps> = ({ index, fields }) => {
    return(
        <S.Container index={index}>
            {fields.length > 0 && fields.map((field, index) => (
                <S.RowSection key={`${field}-${index}`}>
                    {fields[index].map((it) => (
                        <S.Text fieldValue={it} >{it}</S.Text>
                    ))}
                </S.RowSection>
            ))}
        </S.Container>
    )
}

export default ReportsTableRow;