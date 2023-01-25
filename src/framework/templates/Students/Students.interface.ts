import { ResponseStudent } from "~/models/datacore";

export interface StudentsProps {
    students?:ResponseStudent[];
    reload?:boolean;
    setReload?: (boolean:boolean) => void;
}