import { datacore } from "~/models";

export interface ViewClassesProps {
    classes?: datacore.ResponseClass[];
    reload: boolean;
    setReload: (value: boolean) => any;
}

