import { ResponseStudent } from "~/models/datacore";
import { StudentTableFilter } from "~/models/dataview";

export interface StudentTableProps {
    filters: StudentTableFilter;
    data?: ResponseStudent[];
    reload?:boolean;
    setReload?: (boolean:boolean) => void;
}