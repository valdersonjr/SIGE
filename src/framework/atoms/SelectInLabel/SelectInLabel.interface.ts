export interface SelectInLabelProps {
    label?: string;
    options: Array<{value: any, label: string}>;
    onChange?: (value: string) => void;
    selectedOption?: (string:string) => void;
    disabled?: boolean;
    selectedValue?:string;
    multiple?: boolean;
}
