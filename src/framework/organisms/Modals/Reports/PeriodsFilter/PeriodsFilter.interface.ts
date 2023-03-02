import React from 'react';
import { IPeriodsReportsModalFilters } from '~/models/dataview';

interface BackButtonProps {
    modalState?:boolean;
    setModalState?: (boolean:boolean) => void;
}

export interface PeriodsFilterProps extends BackButtonProps {
    title: string;
    children: React.ReactNode;
    setFilters: (filters: IPeriodsReportsModalFilters) => void;
}
