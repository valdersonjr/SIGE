import { IPhoneContactReportsModalFilters } from "~/models/dataview";

export interface PhoneContactFilterDataModalProps {
    filters: IPhoneContactReportsModalFilters;
    setFilters: (filters:IPhoneContactReportsModalFilters) => void;
}