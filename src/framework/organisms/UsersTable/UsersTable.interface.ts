import { FetchUserResponse } from "~/models/datacore";
import { UserTableFilter } from "~/models/dataview";

export interface UsersTableProps {
    filters?:UserTableFilter;
    data?: FetchUserResponse[];
    reload?: boolean;
    setReload?: (value: boolean) => void;
    confirmRemoveModal: boolean;
    setConfirmRemoveModal: (value: boolean) => void;
    setIdToDelete:(number:number) => void;
}
