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
                    <ReportsTableRow key={row.aluno_id} index={index} fields={[[row.turma_descricao], 
                                                                                [row.aluno_nome], 
                                                                                [row.pai && "Pai: " + row.pai.nome, row.mae && "Mãe: " + row.mae.nome], 
                                                                                [row.pai && row.pai.telefone && "Pai: " + row.pai.telefone, row.mae && row.mae.telefone && "Mãe: " + row.mae.telefone ], 
                                                                                [row.pai && row.pai.telefone_celular && "Pai: " + row.pai.telefone_celular, row.mae && row.mae.telefone_celular && "Mãe: " + row.mae.telefone_celular ]]} />
                )
            })}
        </S.Container>
    )
}

export default PhoneContactRerportTable;