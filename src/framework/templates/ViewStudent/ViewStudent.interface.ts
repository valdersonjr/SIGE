import {ResponseStudent} from "~/models/datacore";

export interface ViewStudentProps {
    student?: ResponseStudent;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    isAllReqDone: boolean[];
    setIsAllReqDone: (isAllReqDone: boolean[]) => void;
}
