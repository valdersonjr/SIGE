export interface PeriodsReportTableDataType {
    matricula_id: number;
    ano: number;
    turma_id: number;
    turma_descricao: string;
    periodo_id: number;
    periodo_descricao: string;
    aluno_id: number;
    aluno_nome: string;
    periodo_horario_entrada: string;
    periodo_horario_saida: string;
}

export interface PeriodsReportTableProps {
    data: PeriodsReportTableDataType[];
}