import React from 'react';

interface BackButtonProps {
    modalState?:boolean;
    setModalState?: (boolean:boolean) => void;
}

export interface ConfirmRemoveDataProps extends BackButtonProps {
    title: string;
    children: React.ReactNode;
    setCanSave: (value: boolean) => void;
}
