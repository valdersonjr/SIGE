import React from "react";

export interface ChooseImageProps {
    onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    value: any;
    style?: React.CSSProperties;
}
