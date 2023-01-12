export interface SelectInLabelProps {
    label?: string;
    options: Array<{value: string | number, label: string}>;
    onChange?: (value: string) => void;
    selectedOption?: (string:string) => void;
    disabled?: boolean;
    selectedValue?:string;
}
