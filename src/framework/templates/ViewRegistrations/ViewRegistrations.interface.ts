import {IFilter} from "@organisms/RegistrationsTable/RegistrationsTable.interface";

export interface ViewRegistrationsProps {
    registrations: any[];
    classes: any[];
    reload: boolean;
    setReload: (value: boolean) => void;
    handleFilterChange: (field: string, value: any) => void;
    filters: IFilter;
    clearFilters: () => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    isAllReqDone: boolean[];
    setIsAllReqDone: (isAllReqDone: boolean[]) => void;
}
