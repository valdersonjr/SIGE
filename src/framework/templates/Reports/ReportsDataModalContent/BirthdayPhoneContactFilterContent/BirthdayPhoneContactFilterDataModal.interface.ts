import { IBirthDayPhoneContactReportsModalFilters } from "~/models/dataview";

export interface BirthdayPhoneContactFilterDataModalProps {
    filters: IBirthDayPhoneContactReportsModalFilters;
    setFilters: (filters: IBirthDayPhoneContactReportsModalFilters) => void;
}