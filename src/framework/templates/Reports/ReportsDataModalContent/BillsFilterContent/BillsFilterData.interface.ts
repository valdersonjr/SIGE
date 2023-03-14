import { IBillsReportsModalFilters } from "~/models/dataview";

export interface BillsFilterDataModalContentProps {
    filters:IBillsReportsModalFilters;
    setFilters: (filters:IBillsReportsModalFilters) => void;
}