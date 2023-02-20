import { ReportsTableTitle } from '~/framework/molecules';

import { phoneContactReportTabletitle } from './PhoneContactReportTable.logic';

import ReportsTableRow from '~/framework/molecules/ReportsTableRow/ReportsTableRow.molecule';

import { phoneContactReportTableProps, phoneContactReportTableDataType } from './PhoneContactReportTable.interface';
import * as S from './PhoneContactRerportTable.style';

const PhoneContactRerportTable:React.FC<phoneContactReportTableProps> = ({ data }) => {
    return(
        <S.Container>
            <ReportsTableTitle titles={phoneContactReportTabletitle} />
            {data && data.map((row:phoneContactReportTableDataType, index: number) => {
                return (
                    <ReportsTableRow index={index} fields={[[row.turma_descricao], [row.aluno_nome], ["saber qm é o responsável"], ["idk"], ["idk"]]} />
                )
            })}
        </S.Container>
    )
}

export default PhoneContactRerportTable;