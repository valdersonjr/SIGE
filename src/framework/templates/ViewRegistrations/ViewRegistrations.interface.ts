import {IFilter} from "@organisms/RegistrationsTable/RegistrationsTable.interface";

export interface ViewRegistrationsProps {
    registrations: any[];
    reload: boolean;
    setReload: (value: boolean) => void;
    handleFilterChange: (field: string, value: any) => void;
    filters: IFilter;
    clearFilters: () => void;
}
