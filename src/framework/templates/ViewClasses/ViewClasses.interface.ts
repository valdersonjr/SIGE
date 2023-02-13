export interface ViewClassesProps {
    classes: any;
    classesOptions: any[];
    reload: boolean;
    setReload: (value: boolean) => void;
    handleFilterChange: (field: string, value: any) => void;
    filters: any;
    clearFilters: () => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    isAllReqDone: boolean[];
    setIsAllReqDone: (isAllReqDone: boolean[]) => void;
}

