export interface EditUserDataProps {
    title:string;
    children: React.ReactNode;
    modalState: boolean;
    setModalState?: (state: boolean) => void;
    handleModalSubmit?: (e: React.SyntheticEvent) => void;
}