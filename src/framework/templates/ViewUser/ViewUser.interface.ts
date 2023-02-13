import { FetchUserResponse } from "~/models/datacore";

export interface ViewUserProps {
    user?: FetchUserResponse;
    reload?:boolean;
    setReload?: (value: boolean) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    isAllReqDone: boolean[];
    setIsAllReqDone: (isAllReqDone: boolean[]) => void;
}
