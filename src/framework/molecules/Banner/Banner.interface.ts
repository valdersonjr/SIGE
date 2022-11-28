interface BannerButton {
    hasButton?:boolean;
    onButtonClick?: () => void;
};

export interface BannerProps extends BannerButton {
    title:string;
    text?:string;
    buttonLabel?:string;
}