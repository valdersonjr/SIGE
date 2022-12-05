interface RowType {
    title?:boolean;
}

interface ActionIconsOnClicks {
    onEyeClick?: () => void;
    onThrashClick?: () => void;
    onSwitchClick?: () => void;
}

export interface StudentTableRowProps extends RowType, ActionIconsOnClicks  {
    index:number;
    aluno?: string;
    periodo?: string;
    turma?: string;
    situacao?: string;
}