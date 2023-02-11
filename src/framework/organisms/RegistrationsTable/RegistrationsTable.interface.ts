export interface IFilter {
    ano: string;
    nome: string;
    matricula: string;
    periodo_turma: string;
    turma: string;
    situacao: boolean;
}
export interface RegistrationsTableProps {
    filters: IFilter;
    data?: any[];
    reload: boolean;
    setReload: (value: boolean) => void;
}
