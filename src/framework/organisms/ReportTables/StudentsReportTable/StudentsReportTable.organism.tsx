import { ReportsTableTitle } from '~/framework/molecules';

import { studentsReportTableTitle } from './StudentsReportTable.logic';
import { IStudentsReportModal } from '~/models/dataview/reportsmodal';
import { StudentsReportTableProps } from './IStudentsReportModal.interface';    
import * as S from './StudentsReportTable.style';
import ReportsTableRow from '~/framework/molecules/ReportsTableRow/ReportsTableRow.molecule';

const StudentsReportTable:React.FC<StudentsReportTableProps> = ({ data }) => {
    return(
        <S.Container>
            <ReportsTableTitle titles={studentsReportTableTitle} />
            {data && data.map((row:IStudentsReportModal, index: number) => {
                return (
                    <ReportsTableRow key={row.aluno_id} index={index} fields={[[String(row.ano)], [row.turma_descricao], [row.aluno_nome]]} />
                )
            })}
        </S.Container>
    )
}

export default StudentsReportTable;