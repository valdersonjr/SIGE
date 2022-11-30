import React from "react";

interface BannerButton {
    buttonLabel?:string;
    onButtonClick?: () => void;
};

export interface BannerProps extends BannerButton {
    title:string;
    type: string;
    Icon?: React.ReactNode;
    text?:string;
}