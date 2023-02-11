import { datacore } from "~/models";

export interface ClassesTableProps {
    data: datacore.ResponseClass[];
    reload: boolean;
    setReload: (value: boolean) => void;
    confirmRemoveModal: boolean;
    setConfirmRemoveModal: (value: boolean) => void;
    setIdToDelete: (id: number) => void;
}
