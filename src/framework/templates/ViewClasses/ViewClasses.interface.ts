export interface ViewClassesProps {
    classes: any;
    reload: boolean;
    setReload: (value: boolean) => void;
    handleFilterChange: (field: string, value: any) => void;
    filters: any;
    clearFilters: () => void;
}

