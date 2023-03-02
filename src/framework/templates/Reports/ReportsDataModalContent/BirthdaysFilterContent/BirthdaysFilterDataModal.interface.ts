import { IBirthdaysReportsModalFilters } from "~/models/dataview";

export interface BirthdaysFilterDataModalProps {
    filters: IBirthdaysReportsModalFilters;
    setFilters: (filters:IBirthdaysReportsModalFilters) => void;
}