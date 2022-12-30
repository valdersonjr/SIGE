import React from 'react';
import { FormLogin } from '@organisms';
import { Button, Paragraph, Title, VariantButtonEnum } from '@atoms';
import { LeftSideLoginProps } from './LoginBanner.interface';

import * as S from './LoginBanner.style';
import { dataview } from '~/models';

export const LoginBanner: React.FC<LeftSideLoginProps> = ({
  buttonRegisterText = 'Cadastrar-se',
  buttonForgotPasswordText = 'Esqueci a senha',
  title = 'Entre ou cadastre-se',
  paragraph = 'Digite seus dados cadastrais para realizar seu login',
  submitLoginForm,
}) => {
  const handleClickRegisterButton = () => { };
  const handleClickForgotPasswordButton = () => { };

  const handleSubmitForm = (values: dataview.AuthenticateUser) => {
    submitLoginForm(values);
  };

  return (
    <S.Container>
      <S.Image alt={'SIGE LOGO'} src='/logo.svg' />

      <S.HeaderContainer>
        <S.TitleContainer>
          <Title>{title}</Title>
        </S.TitleContainer>

        <S.SubTitleContainer>
          <Paragraph textAlign='center'>{paragraph}</Paragraph>
        </S.SubTitleContainer>
      </S.HeaderContainer>

      <S.FormContainer>
        <FormLogin onSubmit={handleSubmitForm} />
      </S.FormContainer>

      <S.ButtonContainer>
        <Button
          label={buttonRegisterText}
          onClick={handleClickRegisterButton}
          variant={VariantButtonEnum.SECONDARY_TRANSPARENT}
          justifyText="center"
        />
      </S.ButtonContainer>

      <S.ButtonContainer>
        <Button
          label={buttonForgotPasswordText}
          onClick={handleClickForgotPasswordButton}
          variant={VariantButtonEnum.TEXT}
          justifyText="center"
        />
      </S.ButtonContainer>
    </S.Container>
  );
};
