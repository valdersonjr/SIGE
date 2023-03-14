import { IStudentsReportsModalFilters } from "~/models/dataview";

export interface StudentsFilterDataModalProps {
    filters: IStudentsReportsModalFilters;
    setFilters: (filters: IStudentsReportsModalFilters) => void;
}