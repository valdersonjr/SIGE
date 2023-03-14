import Reload from "~/models/dataview/reload.interface";
import FiltersLoading from "~/models/dataview/filters-loading.interface";
import ConfirmRemoveModal from "~/models/dataview/confirm-remove-modal.interface";
import IdToDelete from "~/models/dataview/id-to-delete.interface";

export interface UsersTableProps extends Reload, FiltersLoading, ConfirmRemoveModal, IdToDelete {
    data: any[];
}
