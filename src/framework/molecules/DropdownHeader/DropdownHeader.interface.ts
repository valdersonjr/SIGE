interface DropdownCardButtonProps {
    buttonText?: string;
}

export interface DropdownCardProps extends DropdownCardButtonProps {
    title: string;
    dropdownState: boolean;
    setDropdownState: (boolean:boolean) => void;
}