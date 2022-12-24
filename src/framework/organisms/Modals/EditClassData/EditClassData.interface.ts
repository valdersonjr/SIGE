import React from "react";

interface BackButtonProps {
    modalState?:boolean;
    setModalState?: (boolean:boolean) => void;
}

export interface EditClassDataProps extends BackButtonProps {
    children: React.ReactNode;
}