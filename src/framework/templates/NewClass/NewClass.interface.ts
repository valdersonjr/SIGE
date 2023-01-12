export interface educationDataProps {
    education: string;
    name: string;
    period: string;
}
export interface finantialDataProps {
    montlyFee: string;
    mealValue: string;
    extraHourValue: string;
    nutritionalProjectValue: string;
    didacticMaterialValue: string;
    pedagogicalMaterialValue: string;
    totalValue: string;
}

export interface NewClassProps {
    handleSubmit?: (event: React.SyntheticEvent, educationData:educationDataProps, finantialData: finantialDataProps) => void;
}
