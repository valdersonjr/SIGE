import { ReportsTableTitle } from '~/framework/molecules';

import { birthdayPhoneContactReportTabletitle } from './BirthdayPhoneContactReportTable.logic';

import ReportsTableRow from '~/framework/molecules/ReportsTableRow/ReportsTableRow.molecule';

import { birthdayPhoneContactReportTableDataType, birthdayPhoneContactReportTableProps } from './BirthdayPhoneContactReportTable.interface';
import * as S from './BirthdayPhoneContactRerportTable.style';

const BirthdayPhoneContactRerportTable:React.FC<birthdayPhoneContactReportTableProps> = ({ data }) => {
    return(
        <S.Container>
            <ReportsTableTitle titles={birthdayPhoneContactReportTabletitle} />
            {data && data.map((row:birthdayPhoneContactReportTableDataType, index: number) => {
                return (
                    <ReportsTableRow index={index} fields={[[row.turma_descricao], [row.aluno_nome], ["saber qm é o responsável"], ["idk"], ["idk"]]} />
                )
            })}
        </S.Container>
    )
}

export default BirthdayPhoneContactRerportTable;