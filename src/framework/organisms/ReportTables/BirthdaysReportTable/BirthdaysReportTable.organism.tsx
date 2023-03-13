import React from 'react';

import { ReportsTableTitle } from '~/framework/molecules';

import { birthdaysReportTableTitle } from './BirthdaysReportTable.logic';

import ReportsTableRow from '~/framework/molecules/ReportsTableRow/ReportsTableRow.molecule';

import { BirthdaysReportTableDataType, BirthdaysReportTableProps } from './BirthdaysReportTable.interface';
import * as S from './BirthdaysReportTable.style';

const BirthdaysReportTable:React.FC<BirthdaysReportTableProps> = ({ data, filter }) => {
    return(
        <S.Container>
            <ReportsTableTitle titles={birthdaysReportTableTitle} />
            {data && data.map((row:BirthdaysReportTableDataType, index: number) => {
                if(filter === 'aluno') return <ReportsTableRow key={row.aluno_id} index={index} fields={[[row.turma_descricao], ["Aluno"], [row.aluno_nome], [row.aluno_data_nascimento]]} />
                else if(filter === 'pai') return <ReportsTableRow key={row.pai.id} index={index} fields={[[], ["Pai"], [row.pai.nome], [row.pai.data_nascimento]]} />
                else if(filter === 'mae') return <ReportsTableRow key={row.mae.id} index={index} fields={[[], ["Mãe"], [row.mae.nome], [row.mae.data_nascimento]]} />

                return (
                    <React.Fragment key={row.aluno_id}>
                        <ReportsTableRow index={index} fields={[[row.turma_descricao], ["Aluno"], [row.aluno_nome], [row.aluno_data_nascimento]]} />
                        <ReportsTableRow index={index} fields={[[], ["Mãe"], [row.mae.nome], [row.mae.data_nascimento]]} />
                        <ReportsTableRow index={index} fields={[[], ["Pai"], [row.pai.nome], [row.pai.data_nascimento]]} />
                    </React.Fragment>
                )
            })}
        </S.Container>
    )
}

export default BirthdaysReportTable;