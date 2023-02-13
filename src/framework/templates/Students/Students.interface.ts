import { ResponseStudent } from "~/models/datacore";

export interface StudentsProps {
    students?:ResponseStudent[];
    reload?:boolean;
    setReload?: (boolean:boolean) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    isAllReqDone: boolean[];
    setIsAllReqDone: (isAllReqDone: boolean[]) => void;
}
