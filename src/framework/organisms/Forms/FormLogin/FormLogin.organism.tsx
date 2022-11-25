import React, { useState } from 'react';
import { Button, VariantButtonEnum } from '@atoms';
import { InputInLabel } from '@molecules';

import { FormLoginProps } from './FormLogin.interface';

import * as S from './FormLogin.style';

export const FormLogin: React.FC<FormLoginProps> = ({
  onSubmit,
  action,
  buttonLoginText = 'Entrar',
}) => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  function handleChange(key: string, value: string) {
    setForm({
      ...form,
      [key]: value,
    });
  }

  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.stopPropagation();
    evt.preventDefault();
    onSubmit(form);
  };
  return (
    <S.FormContainer onSubmit={handleSubmit} action={action}>
      <S.InputFormContainer>
        <InputInLabel
          label='E-mail'
          onChange={(value) => handleChange('username', value)}
          placeholder='Digite aqui'
          value={form.username}
        />
      </S.InputFormContainer>

      <S.InputFormContainer>
        <InputInLabel
          label='Senha'
          onChange={(value) => handleChange('password', value)}
          placeholder='Digite aqui'
          value={form.password}
        />
      </S.InputFormContainer>

      <S.ButtonContainer>
        <Button label={buttonLoginText} variant={VariantButtonEnum.PRIMARY} />
      </S.ButtonContainer>
    </S.FormContainer>
  );
};
