import { ReportsTableTitle } from '~/framework/molecules';

import { extraClassActivitiesTitle } from './ExtraClassActivitiesReportTable.logic';

import ReportsTableRow from '~/framework/molecules/ReportsTableRow/ReportsTableRow.molecule';

import { ExtraClassActivitiesDataType, ExtraClassActivitiesProps } from './ExtraClassActivitiesReportTable.interface';
import * as S from './ExtraClassActivitiesReportTable.style';

const ExtraClassActivitiesReportTable:React.FC<ExtraClassActivitiesProps> = ({ data }) => {
    return(
        <S.Container>
            <ReportsTableTitle titles={extraClassActivitiesTitle} />
            {data && data.map((row:ExtraClassActivitiesDataType, index: number) => {
                let activityArray = row.atividades.split("-");
                return (
                    <ReportsTableRow index={index} fields={[[String(row.ano)], [row.turma_descricao], [row.aluno_nome], activityArray]} />
                )
            })}
        </S.Container>
    )
}

export default ExtraClassActivitiesReportTable;