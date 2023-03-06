export interface ImagePermissionReportTableDataType {
    matricula_id: number;
    ano: number;
    turma_id: number;
    turma_descricao: string;
    aluno_id: number;
    aluno_nome: string;
    divulgacao_imagem_rede: boolean;
}

export interface ImagePermissionReportTableProps {
    data: ImagePermissionReportTableDataType[];
}