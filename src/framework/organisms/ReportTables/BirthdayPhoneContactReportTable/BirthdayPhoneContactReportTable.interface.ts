import { IFather, IMother } from "~/models/datacore";

export interface birthdayPhoneContactReportTableDataType {
    matricula_id: number;
    ano: number;
    turma_id: number;
    turma_descricao: string;
    aluno_id: number;
    aluno_nome: string;
    pai:IFather;
    mae: IMother;
}

export interface birthdayPhoneContactReportTableProps {
    data: birthdayPhoneContactReportTableDataType[];
}