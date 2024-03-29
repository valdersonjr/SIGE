import { FetchUserResponse } from "~/models/datacore";

export interface UsersProps {
    users?: FetchUserResponse[];
    reload?: boolean;
    setReload?: (value: boolean) => void;
}