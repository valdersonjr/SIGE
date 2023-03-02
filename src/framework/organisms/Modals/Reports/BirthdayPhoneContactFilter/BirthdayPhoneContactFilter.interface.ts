import React from 'react';
import { IBirthDayPhoneContactReportsModalFilters } from '~/models/dataview';

interface BackButtonProps {
    modalState?:boolean;
    setModalState?: (boolean:boolean) => void;
}

export interface BirthdayPhoneContactFilterProps extends BackButtonProps {
    title: string;
    children: React.ReactNode;
    setFilters: (filters: IBirthDayPhoneContactReportsModalFilters) => void;
}
