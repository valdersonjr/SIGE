interface DropdownCardButtonProps {
    buttonText?: string;
    onButtonClick?: () => void;
}

export interface DropdownCardProps extends DropdownCardButtonProps {
    title: string;
    dropdownState: boolean;
    setDropdownState: (boolean:boolean) => void;
}