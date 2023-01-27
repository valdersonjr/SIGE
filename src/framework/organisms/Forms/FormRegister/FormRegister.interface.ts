export interface FormRegisterProps {
    onSubmit: (form:{name: string; email:string; password:string; confirmPassword:string; phone:string;}) => void;
}