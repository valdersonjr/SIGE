import { datacore } from "~/models";

export interface IFilter {
    ensino: string;
    descricao: string;
    status: string;
}
export interface ClassesTableProps {
    filters: IFilter;
    data?: datacore.ResponseClass[];
    reload: boolean;
    setReload: (value: boolean) => void
}
