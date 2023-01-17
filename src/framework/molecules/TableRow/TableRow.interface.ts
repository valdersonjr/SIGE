interface ActionIconsOnClicks {
    onEyeClick?: () => void;
    onThrashClick?: () => void;
    onSwitchClick?: () => void;
}

export interface TableRowProps extends ActionIconsOnClicks  {
    index: number;
    fields: string[];
    status?: string;
    switchValue?: boolean;
}
