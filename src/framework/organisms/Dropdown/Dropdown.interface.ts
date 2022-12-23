import React from "react";

interface DropdownCardButtonProps {
    buttonText?: string;
    onButtonClick?: () => void;
}

export interface DrodownProps extends DropdownCardButtonProps {
    title: string;
    children?: React.ReactNode;
}