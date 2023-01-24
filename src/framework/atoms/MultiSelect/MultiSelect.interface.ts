interface option {
    label: string;
    value: string | number;
}

export interface MultiSelectProps {
    label?: string;
    options: option[];
    onChange: (any:any) => void;
}