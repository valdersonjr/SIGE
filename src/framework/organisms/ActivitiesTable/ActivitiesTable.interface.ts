import { ResponseActivities } from "~/models/datacore";

export interface ActivitiesTableProps {
    data: ResponseActivities[];
    setActivitiesData?: (data: ResponseActivities[]) => void;
    reload?: boolean;
    setReload?: (reload: boolean) => void;
    confirmRemoveModal: boolean;
    setConfirmRemoveModal: (value: boolean) => void;
    setIdToDelete:(number:number) => void;
}
