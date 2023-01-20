import { IRegisterUser } from "~/models/dataview";

export interface  RegisterUserProps  {
    handleSubmit?: (user:IRegisterUser) => void;
}