import { ResponseActivities } from "~/models/datacore";

interface IActivityFilter {
    activity: string;
    status: string;
}

export interface ActivitiesTableProps {
    data?: ResponseActivities[];
    filters?: IActivityFilter;
    setActivitiesData?: (data: ResponseActivities[]) => void;
    reload?: boolean;
    setReload?: (reload: boolean) => void;
    confirmRemoveModal: boolean;
    setConfirmRemoveModal: (value: boolean) => void;
    setIdToDelete:(number:number) => void;
}
