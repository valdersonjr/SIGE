interface ActionIconsOnClicks {
    onEyeClick?: () => void;
    onThrashClick?: () => void;
    onSwitchClick?: () => void;
}

export interface TableRowProps extends ActionIconsOnClicks  {
    index:number;
    aluno?: string;
    periodo?: string;
    turma?: string;
    situacao?: string;
}