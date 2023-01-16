export interface IFilter {
    register: string;
    studentName: string;
    registerYear: string;
    status: string;
}
export interface RegistrationsTableProps {
    filters: IFilter;
    data?: any[];
}
