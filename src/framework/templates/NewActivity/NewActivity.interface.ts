export interface NewActivityProps {
    description: string;
    setDescription: (string:string) => void;
    onSubmit: (event:React.SyntheticEvent) => void;
}
