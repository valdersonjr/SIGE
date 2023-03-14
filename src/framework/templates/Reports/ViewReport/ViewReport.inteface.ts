import { IReportsModalFilters } from "~/models/dataview";

export interface ViewReportProps {
    state: boolean;
    endpoint: string;
    setModalState?: (boolean:boolean) => void;
    filters: IReportsModalFilters;
}