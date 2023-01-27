import FormRegister from "~/framework/organisms/Forms/FormRegister/FormRegister.organism";
import { registerUserApiService } from "~/service/api";

import * as S from "./Register.style";

const RegisterBanner:React.FC = () => {
    const handleFormSubmit = (form:{name: string; email:string; password:string; confirmPassword:string; phone:string;}) => {
        if(form.password.length < 6 || form.confirmPassword.length < 6) alert("Atenção! \nSua senha deve ter pelo menos 6 caracteres");
        else if(form.password !== form.confirmPassword) alert("Atenção! \nSenhas diferentes");

        console.log(form);
        // registerUserApiService({name: form.name, email:form.email, password:form.password, phone:form.phone, profile: ["2"]});
    }
    
    return (
        <S.Container>
            <S.Image alt={'SIGE LOGO'} src='/logo.svg' />
            <S.FormContainer>
                <FormRegister onSubmit={handleFormSubmit} />
            </S.FormContainer>
        </S.Container>
    )
}

export default RegisterBanner;