import React from 'react';
import { IImagePermissionReportsModalFilters } from '~/models/dataview';

interface BackButtonProps {
    modalState?:boolean;
    setModalState?: (boolean:boolean) => void;
}

export interface ImagePermissionsFilterProps extends BackButtonProps {
    title: string;
    children: React.ReactNode;
    setFilters: (filters: IImagePermissionReportsModalFilters) => void;
}
