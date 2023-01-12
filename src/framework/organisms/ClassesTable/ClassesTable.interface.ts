import { datacore } from "~/models";

export interface IFilter {
    class: string;
    period: string;
    schedule: string;
    status: string;
}
export interface ClassesTableProps {
    filters: IFilter;
    data?: datacore.ResponseClass[];
}