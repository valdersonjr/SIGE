import React from 'react';
import { IBillsReportsModalFilters } from '~/models/dataview';

interface BackButtonProps {
    modalState?:boolean;
    setModalState?: (boolean:boolean) => void;
}

export interface BillsFilterProps extends BackButtonProps {
    title: string;
    children: React.ReactNode;
    setFilters: (filters: IBillsReportsModalFilters) => void;
}
