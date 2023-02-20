import { ReportsTableTitle } from '~/framework/molecules';

import { periodsReportTableTitle } from './PeriodsReportTable.logic';

import ReportsTableRow from '~/framework/molecules/ReportsTableRow/ReportsTableRow.molecule';

import { PeriodsReportTableProps, PeriodsReportTableDataType } from './PeriodsReportTable.interface';
import * as S from './PeriodsReportTable.style';

const PeriodsReportTable:React.FC<PeriodsReportTableProps> = ({ data }) => {
    return(
        <S.Container>
            <ReportsTableTitle titles={periodsReportTableTitle} />
            {data && data.map((row:PeriodsReportTableDataType, index: number) => {
                return (
                    <ReportsTableRow index={index} fields={[[String(row.ano)], [row.turma_descricao], [row.periodo_descricao], [row.aluno_nome],[row.periodo_horario_entrada], [row.periodo_horario_saida]]} />
                )
            })}
        </S.Container>
    )
}

export default PeriodsReportTable;