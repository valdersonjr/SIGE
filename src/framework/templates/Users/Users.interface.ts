import { FetchUserResponse } from "~/models/datacore";

export interface UsersProps {
    users?: FetchUserResponse[];
    reload?: boolean;
    setReload?: (value: boolean) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    isAllReqDone: boolean[];
    setIsAllReqDone: (isAllReqDone: boolean[]) => void;
}
