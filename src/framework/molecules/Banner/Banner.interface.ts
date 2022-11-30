import React from "react";

interface BannerButton {
    buttonLabel?:string;
    onButtonClick?: () => void;
};

export interface BannerProps extends BannerButton {
    Icon?: React.ReactNode;
    title:string;
    text?:string;
}