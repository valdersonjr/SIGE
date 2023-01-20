export interface IRegisterUser {
    name:string;
    profile:string[];
    email:string;
    phone:string;
    password: string;
    confirmPassword: string;
    description: string;
    status?: boolean;
}