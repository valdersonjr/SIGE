import { ReportsTableTitle } from '~/framework/molecules';

import ReportsTableRow from '~/framework/molecules/ReportsTableRow/ReportsTableRow.molecule';

import { BillsReportTableDataType, BillsReportTableProps } from './BillsReportTable.interface';
import { billsReportTableTitle } from './BillsReportTable.logic';
import * as S from './BillsReportTable.style';

const BillsReportTable:React.FC<BillsReportTableProps> = ({ data }) => {
    return(
        <S.Container>
            <ReportsTableTitle titles={billsReportTableTitle} />
            {data && data.map((row:BillsReportTableDataType, index: number) => {
                if(row.responsavel_financeiro === "pai"){
                    return(
                        <ReportsTableRow index={index} fields={[[row.turma_descricao], [row.aluno_nome], [row.responsavel_financeiro], [row.pai.nome, "CPF: " + String(row.pai.cpf)], ["Rua: " + row.endereco.rua, "Bairro: " + row.endereco.bairro, "CEP: " + row.endereco.cep, row.endereco.cidade.descricao+"-"+row.endereco.cidade.uf.sigla]]} />
                    )
                }
                return (
                    <ReportsTableRow index={index} fields={[[row.turma_descricao], [row.aluno_nome], [row.responsavel_financeiro], [row.mae.nome, "CPF: " + String(row.mae.cpf)], ["Rua: " + row.endereco.rua, "Bairro: " + row.endereco.bairro, "CEP: " + row.endereco.cep, row.endereco.cidade.descricao+"-"+row.endereco.cidade.uf.sigla]]} />    
                )
            })}
        </S.Container>
    )
}

export default BillsReportTable;