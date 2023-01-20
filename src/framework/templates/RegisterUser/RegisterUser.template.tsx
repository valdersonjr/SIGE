import React from 'react';
import Select from 'react-select'

import * as S from './RegisterUser.style';
import {Header, InputInLabel} from "@molecules";
import {Button, SelectInLabel, Title, VariantButtonEnum} from "@atoms";
import { RegisterUserProps } from './RegisterUser.interface';
import { IRegisterUser } from '~/models/dataview';

const profileOptions = [
    {label: "Administrador", value: "admin"},
    {label: "Usuário", value: "user"},
    {label: "Responsável", value: "guardian"},
]

export const RegisterUser: React.FC<RegisterUserProps> = ({ handleSubmit }) => {
    const [inputdata, setInputData] = React.useState<IRegisterUser>({
        name: "",
        profile: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        description: ""
    });

    const handleChange = (value: string, type: string) => {
        setInputData({...inputdata, [type]: value});
    }

    const handleReset = (event:React.SyntheticEvent) => {
        event.preventDefault();

        setInputData({
            name: "",
            profile: "",
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
                        {/* <SelectInLabel label='Perfil' multiple options={profileOptions} onChange={(e) => console.log(e)} /> */}
                        <Select isMulti options={profileOptions} />
                        <InputInLabel label="Telefone" placeholder="Digite aqui"  value={inputdata.phone} onChange={(value:string) => handleChange(value, "phone")} />
                    </S.InputContainer>
                    <S.InputContainer>
                        <InputInLabel required min={3} label="Senha" type='password' placeholder="Digite aqui"  value={inputdata.password} onChange={(value:string) => handleChange(value, "password")} />
                        <InputInLabel required label="Confirmar senha" type='password' placeholder="Digite aqui" value={inputdata.confirmPassword} onChange={(value:string) => handleChange(value, "confirmPassword")} />
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
