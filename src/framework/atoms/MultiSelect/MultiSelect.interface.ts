interface option {
    label: string;
    value: string;
}

export interface MultiSelectProps {
    label?: string;
    options: option[];
    onChange: (any:any) => void;
}