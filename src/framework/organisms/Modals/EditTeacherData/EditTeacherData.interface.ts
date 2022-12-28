import React from "react";

interface BackButtonProps {
    modalState?:boolean;
    setModalState?: (boolean:boolean) => void;
}

export interface EditTeacherDataProps extends BackButtonProps {
    title: string;
    children: React.ReactNode;
}
