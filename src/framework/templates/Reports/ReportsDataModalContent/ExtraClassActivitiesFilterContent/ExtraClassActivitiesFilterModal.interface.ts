import { IExtraClassActivitiesReportsModalFilters } from "~/models/dataview";

export interface ExtraClassActivitiesFilterDataModalProps {
    filters:IExtraClassActivitiesReportsModalFilters;
    setFilters: (filters:IExtraClassActivitiesReportsModalFilters) => void;
}