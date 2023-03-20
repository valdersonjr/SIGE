import {ButtonInternalProps} from "@atoms/Button/Button.interface";
import React from "react";

export interface NavButtonProps extends ButtonInternalProps {
    onClick: (e:  React.SyntheticEvent) => void;
    label: string;
    leftIcon: React.ReactNode;
    disabled: boolean;
    justifyText: 'start' | 'center' | 'end';
}
