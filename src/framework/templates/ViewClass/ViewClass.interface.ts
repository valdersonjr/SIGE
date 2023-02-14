export interface ViewClassProps {
    classId: number;
    handleSubmit: (data: any) => void;
    registrationModalState: boolean;
    setRegistrationModalState: (value: boolean) => void;
    financeModalState: boolean;
    setFinanceModalState: (value: boolean) => void;
    reload: boolean;
    setReload: (value: boolean) => void;
}
