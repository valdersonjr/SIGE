import { UserTableFilter } from "~/models/dataview";

export interface FormUserQueyProps {
    setFilters?: (filters:UserTableFilter) => void;
}