import React from 'react';
import { IExtraClassActivitiesReportsModalFilters } from '~/models/dataview';

interface BackButtonProps {
    modalState?:boolean;
    setModalState?: (boolean:boolean) => void;
}

export interface ExtraClassActivitiesFilterProps extends BackButtonProps {
    title: string;
    children: React.ReactNode;
    setFilters: (filters: IExtraClassActivitiesReportsModalFilters) => void;
}
