import { IPeriodsReportsModalFilters } from "~/models/dataview";

export interface PeriodsFilterDataModalProps {
    filters: IPeriodsReportsModalFilters;
    setFilters: (filters:IPeriodsReportsModalFilters) => void;
}