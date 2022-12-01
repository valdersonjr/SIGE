interface RowType {
    title?:boolean;
}

export interface StudentTableRowProps extends RowType {
    index:number;
    aluno?: string;
    periodo?: string;
    turma?: string;
    situacao?: string;
}