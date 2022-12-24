interface BackButtonProps {
    backButtonState?:boolean;
    setBackButtonState?: (boolean:boolean) => void;
}

export interface HeaderProps extends BackButtonProps {
    title: string;
    buttonText?:string;
    onButtonClick?: () => void;
}