import { ReportsTableTitle } from '~/framework/molecules';

import { imagePermissionReportTableTitle } from './ImagePermissionReportTable.logic';

import ReportsTableRow from '~/framework/molecules/ReportsTableRow/ReportsTableRow.molecule';

import { ImagePermissionReportTableProps, ImagePermissionReportTableDataType } from './ImagePermissionReportTable.interface';
import * as S from './ImagePermissionReportTable.style';

const ImagePermissionReportTable:React.FC<ImagePermissionReportTableProps> = ({ data }) => {
    return(
        <S.Container>
            <ReportsTableTitle titles={imagePermissionReportTableTitle} />
            {data && data.map((row:ImagePermissionReportTableDataType, index: number) => {
                return (
                    <ReportsTableRow key={row.aluno_id} index={index} fields={[[String(row.ano)], [row.turma_descricao], [row.aluno_nome], [row.divulgacao_imagem_rede ? "Sim" : "Não"]]} />
                )
            })}
        </S.Container>
    )
}

export default ImagePermissionReportTable;