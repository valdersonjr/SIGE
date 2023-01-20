import React from 'react';

import * as S from './RegisterUser.style';
import {Header, InputInLabel} from "@molecules";
import {Button, Title, VariantButtonEnum} from "@atoms";
import { RegisterUserProps } from './RegisterUser.interface';
import { IRegisterUser } from '~/models/dataview';
import MultiSelect from '~/framework/atoms/MultiSelect/MuliSelect.atom';

const profileOptions = [
    {label: "Administrador", value: "ADM"},
    {label: "Usuário", value: "USU"},
    {label: "Responsável", value: ""},
]

export const RegisterUser: React.FC<RegisterUserProps> = ({ handleSubmit }) => {
    const [inputdata, setInputData] = React.useState<IRegisterUser>({
        name: "",
        profile: [],
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        description: ""
    });

    const handleChange = (value: string, type: string) => {
        setInputData({...inputdata, [type]: value});
    }

    const handleMultiSelectChange = (value: [{ label: string; value: string; }]) => {
        let profileArray:string[] = [];
        
        value.forEach(element => {
            profileArray.push(element.value);
        });

        setInputData({ ...inputdata, profile: profileArray });
    }

    const handleReset = (event:React.SyntheticEvent) => {
        event.preventDefault();

        setInputData({
            name: "",
            profile: [],
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
            description: ""
        });
    }

    const handleRegisterButtonClick = (event:React.SyntheticEvent) => {
        event.preventDefault();

        if(handleSubmit) {
            handleSubmit(inputdata);
        };
    }
    return(
        <S.Container>
            <S.Header>
                <Header title="Novo Usuário" navigatePath='/usuarios'  />
            </S.Header>
            <S.Body>
                <S.InputSection>
                    <Title>Dados do Usuário</Title>
                    <S.InputContainer>
                        <InputInLabel label="Nome do Usuário" placeholder="Digite aqui" value={inputdata.name} onChange={(value:string) => handleChange(value, "name")} />
                        <InputInLabel label="Email" placeholder="Digite aqui"  value={inputdata.email} onChange={(value:string) => handleChange(value, "email")} />
                    </S.InputContainer>
                    <S.InputContainer>
                        <div style={{"width":"100%", "marginTop":"4px"}}>
                            <MultiSelect label="Perfil"  options={profileOptions} onChange={(value) => handleMultiSelectChange(value)} />
                        </div>
                        <InputInLabel label="Telefone" placeholder="Digite aqui"  value={inputdata.phone} onChange={(value:string) => handleChange(value, "phone")} />
                    </S.InputContainer>
                    <S.InputContainer>
                        <InputInLabel label="Senha" type='password' placeholder="Digite aqui"  value={inputdata.password} onChange={(value:string) => handleChange(value, "password")} />
                        <InputInLabel label="Confirmar senha" type='password' placeholder="Digite aqui" value={inputdata.confirmPassword} onChange={(value:string) => handleChange(value, "confirmPassword")} />
                    </S.InputContainer>
                    <S.InputContainer>
                        <S.DescInfoContainer>
                            Descrição
                            <S.DescInfoInput placeholder="Digite aqui..." value={inputdata.description} onChange={(e:React.ChangeEvent<HTMLTextAreaElement>) => handleChange(e.target.value, "description")} />
                        </S.DescInfoContainer>
                    </S.InputContainer>
                </S.InputSection>
                <S.ButtonContainer>
                    <Button type='reset' label="Limpar campos" variant={VariantButtonEnum.PRIMARY} justifyText="center" onClick={handleReset} />
                    <Button type='submit' label="Criar Matrícula" variant={VariantButtonEnum.SECONDARY} justifyText="center" onClick={handleRegisterButtonClick} />
                </S.ButtonContainer>
            </S.Body>
        </S.Container>
    )
};
