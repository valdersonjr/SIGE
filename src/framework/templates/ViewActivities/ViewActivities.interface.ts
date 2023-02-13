import { ResponseActivities } from "~/models/datacore";

export interface ViewActivitiesProps {
    activities: ResponseActivities[];
    reload?: boolean;
    setReload?: (reload: boolean) => void;
    handleFilterChange: (field: string, value: any) => void;
    filters: any;
    clearFilters: () => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    isAllReqDone: boolean[];
    setIsAllReqDone: (isAllReqDone: boolean[]) => void;
}
