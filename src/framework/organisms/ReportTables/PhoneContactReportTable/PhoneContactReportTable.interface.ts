import { IFather, IMother } from "~/models/datacore";

export interface phoneContactReportTableDataType {
    matricula_id: number;
    ano: number;
    turma_id: number;
    turma_descricao: string;
    aluno_id: number;
    aluno_nome: string;
    pai:IFather;
    mae: IMother;
}

export interface phoneContactReportTableProps {
    data: phoneContactReportTableDataType[];
}