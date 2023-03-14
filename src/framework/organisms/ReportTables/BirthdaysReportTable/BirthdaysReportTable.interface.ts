import { IFather, IMother } from "~/models/datacore";

export interface BirthdaysReportTableDataType {
    matricula_id: number;
    ano: number;
    turma_id: number;
    turma_descricao: string;
    aluno_id: number;
    aluno_nome: string;
    aluno_data_nascimento: string;
    pai: IFather;
    mae: IMother;
}


export interface BirthdaysReportTableProps {
    data: BirthdaysReportTableDataType[];
    filter: string;
}
