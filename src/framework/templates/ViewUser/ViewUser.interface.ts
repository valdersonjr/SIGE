import { FetchUserResponse } from "~/models/datacore";

export interface ViewUserProps {
    user?: FetchUserResponse;
    reload?:boolean;
    setReload?: (value: boolean) => void;
}
