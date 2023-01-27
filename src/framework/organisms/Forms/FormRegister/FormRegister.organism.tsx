import React, { useState } from "react";
import { Button, VariantButtonEnum } from "~/framework/atoms";
import { InputInLabel } from "~/framework/molecules";
import { FormRegisterProps } from "./FormRegister.interface";
import * as S from "./FormRegister.style";

const FormRegister:React.FC<FormRegisterProps> = ({onSubmit}) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: ''
      });


    const handleChange = (key: string, value: string) => {
        setForm({
          ...form,
          [key]: value,
        });
      }

      const handleSubmit = (event:React.SyntheticEvent) => {
        event.stopPropagation();
        event.preventDefault();
        onSubmit(form);
      }

    return(
        <S.FormContainer onSubmit={handleSubmit} >
            <S.InputFormContainer>
                <InputInLabel
                    required
                    type='text'
                    label='Nome'
                    onChange={(value) => handleChange("name", value)}
                    placeholder='Sige'
                    value={form.name}
                />
            </S.InputFormContainer>

            <S.InputFormContainer>
                <InputInLabel
                    required
                    type='email'
                    label='E-mail'
                    onChange={(value) => handleChange("email", value)}
                    placeholder='exemplo@sige.com'
                    value={form.email}
                />
            </S.InputFormContainer>
    
            <S.InputFormContainer>
                <InputInLabel
                    required
                    type='password'
                    label='Senha'
                    onChange={(value) => handleChange("password", value)}
                    placeholder='Digite aqui'
                    value={form.password}
                />
            </S.InputFormContainer>
            
            <S.InputFormContainer>
                <InputInLabel
                    required
                    type='password'
                    label='Confirmar senha'
                    onChange={(value) => handleChange("confirmPassword", value)}
                    placeholder='Digite aqui'
                    value={form.confirmPassword}
                />
            </S.InputFormContainer>

            <S.InputFormContainer>
                <InputInLabel
                    mask="(99) 99999 9999"
                    required
                    type='txt'
                    label='Telefone'
                    onChange={(value) => handleChange("phone", value)}
                    placeholder='Digite aqui'
                    value={form.phone}
                />
            </S.InputFormContainer>

            <S.ButtonContainer>
                <Button label="Cadastrar" variant={VariantButtonEnum.SMALL_SECONDARY} justifyText="center" type="submit" />
            </S.ButtonContainer>
      </S.FormContainer>
    )
}

export default FormRegister;