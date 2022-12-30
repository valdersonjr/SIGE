export interface SelectInLabelProps {
    label?: string;
    options: Array<{value: string, label: string}>;
    onChange?: (value: string) => void;
}
