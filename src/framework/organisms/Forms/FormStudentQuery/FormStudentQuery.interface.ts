import { StudentTableFilter } from "~/models/dataview";

export interface FormStudentQueryProps {
    filters?:StudentTableFilter;
    setFilters?: (filters:StudentTableFilter) => void;
}