import { IProfile } from "~/models/datacore";

interface ActionIconsOnClicks {
    onEyeClick?: () => void;
    onThrashClick?: () => void;
    onSwitchClick?: () => void;
}

export interface TableRowProps extends ActionIconsOnClicks  {
    index: number;
    fields: {field: string, status: boolean | null}[];
    profiles?: IProfile[];
    status?: string;
    switchValue?: boolean;
}
