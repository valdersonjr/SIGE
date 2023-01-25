// import {SelectSearchProps as DefaultProps} from "react-select-search";
import {MultiSelectProps} from "@atoms/MultiSelect/MultiSelect.interface";

export interface SelectSearchProps extends MultiSelectProps {
    label: string;
    options: {label: string, value: string}[];
    onChange: (any: any) => void;
    value: {label: string, value: string};
}

