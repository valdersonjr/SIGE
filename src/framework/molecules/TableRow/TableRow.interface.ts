import { IProfile } from "~/models/datacore";

interface ActionIconsOnClicks {
    onEyeClick?: () => void;
    onThrashClick?: () => void;
    onSwitchClick?: () => void;
}

export interface TableRowProps extends ActionIconsOnClicks  {
    index: number;
    fields: string[];
    profiles: IProfile[];
    status?: string;
    switchValue?: boolean;
}
