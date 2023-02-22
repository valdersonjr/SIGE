import { IStudentsReportsModalFilters } from "~/models/dataview";

interface IFilters {
    studentsModalFilters: IStudentsReportsModalFilters;
}

export interface ViewReportProps extends IFilters {
    state: boolean;
    endpoint: string;
    setModalState?: (boolean:boolean) => void;
}