import React from "react";

interface DropdownCardButtonProps {
    buttonText?: string;
}

export interface DrodownProps extends DropdownCardButtonProps {
    title: string;
    children?: React.ReactNode;
}