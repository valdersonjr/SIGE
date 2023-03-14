import React from 'react';
import * as S from './RegisterUser.style';
import {Header, InputInLabel} from "@molecules";
import {Button, VariantButtonEnum} from "@atoms";
import { RegisterUserProps } from './RegisterUser.interface';
import { IRegisterUser } from '~/models/dataview';
import MultiSelect from '~/framework/atoms/MultiSelect/MuliSelect.atom';

const profileOptions = [
    {label: "Administrador", value: 1},
    {label: "Usuário", value: 2},
    {label: "Responsável", value: 3}
]

export const RegisterUser: React.FC<RegisterUserProps> = ({ handleSubmit }) => {
    const [inputData, setInputData] = React.useState<IRegisterUser>({
        name: "",
        profile: [],
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        description: ""
    });

    const handleChange = (value: string, type: string) => {
        setInputData({...inputData, [type]: value});
    }

    const handleMultiSelectChange = (value: [{ label: string; value: string; }]) => {
        let profileArray:string[] = [];
        
        value.forEach(element => {
            profileArray.push(element.value);
        });

        setInputData({ ...inputData, profile: profileArray });
    }

    return(
        <S.Container>
            <S.Header>
                <Header title="Novo Usuário" navigatePath='/usuarios'  />
            </S.Header>
            <S.Body>
                <S.InputSection>
                    <S.InputContainer>
                        <InputInLabel required label="Nome do Usuário" placeholder="Digite aqui" value={inputData.name} onChange={(value:string) => handleChange(value, "name")} />
                        <InputInLabel required type="email" label="Email" placeholder="usuario@sige"  value={inputData.email} onChange={(value:string) => handleChange(value, "email")} />
                    </S.InputContainer>
                    <S.InputContainer>
                        <div style={{"width":"100%", "marginTop":"4px"}}>
                            <MultiSelect required label="Perfil"  options={profileOptions} onChange={(value) => handleMultiSelectChange(value)} />
                        </div>
                        <InputInLabel required mask='(99) 99999 9999' type='text' label="Telefone" placeholder="(XX) 9XXXX - XXXX"  value={inputData.phone} onChange={(value:string) => handleChange(value, "phone")} />
                    </S.InputContainer>
                    <S.InputContainer>
                        <InputInLabel required label="Senha" type='password' placeholder="Digite aqui"  value={inputData.password} onChange={(value:string) => handleChange(value, "password")} />
                        <InputInLabel required label="Confirmar senha" type='password' placeholder="Digite aqui" value={inputData.confirmPassword} onChange={(value:string) => handleChange(value, "confirmPassword")} />
                    </S.InputContainer>
                    <S.InputContainer>
                        <S.DescInfoContainer>
                            Descrição
                            <S.DescInfoInput placeholder="Digite aqui..." value={inputData.description} onChange={(e:React.ChangeEvent<HTMLTextAreaElement>) => handleChange(e.target.value, "description")} />
                        </S.DescInfoContainer>
                    </S.InputContainer>
                </S.InputSection>
                <S.ButtonContainer>
                    <Button label="Salvar" variant={VariantButtonEnum.SECONDARY} justifyText="center"
                        onClick={(e) => handleSubmit(e, {
                            nome: inputData.name,
                            email: inputData.email,
                            senha: inputData.password,
                            confirmaSenha: inputData.confirmPassword,
                            telefone: inputData.phone,
                            ativo: true,
                            perfis: inputData.profile
                        })}
                    />
                </S.ButtonContainer>
            </S.Body>
        </S.Container>
    )
};
