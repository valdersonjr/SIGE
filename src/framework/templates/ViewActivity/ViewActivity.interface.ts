export interface ViewActivityProps {
    activityId: number;
    handleSubmit: (data: any) => void;
    activityRegistrationModalState: boolean;
    setActivityRegistrationModalState: (value: boolean) => void;
    reload: boolean;
    setReload: (value: boolean) => void;
}
