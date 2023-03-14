import { IImagePermissionReportsModalFilters } from "~/models/dataview";

export interface ImagePermissionsFilterDataModalProps {
    filters: IImagePermissionReportsModalFilters;
    setFilters: (filters:IImagePermissionReportsModalFilters) => void;
}