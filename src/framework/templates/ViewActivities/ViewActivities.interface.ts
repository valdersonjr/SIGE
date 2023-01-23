import { ResponseActivities } from "~/models/datacore";

export interface ViewActivitiesProps {
    activities?: ResponseActivities[];
    reload?: boolean;
    setReload?: (reload: boolean) => void;
}
