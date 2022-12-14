import React from 'react';
import { BigLogo } from '@atoms';
import { LoginBanner } from '@templates';
import { useAuthentication } from '@hooks';
import * as S from './Login.style';
import { AuthenticateUser } from '~/models/dataview/AuthenticateUser.interface';

export const LoginPage: React.FC = () => {
  const authenticate = useAuthentication();
  const handleSubmitLoginForm = (value: AuthenticateUser) => {
    authenticate.login(value).then(r => console.log('logged', r));
  };
  return (
    <S.Container>
      <S.LeftSideContainer>
        <LoginBanner submitLoginForm={handleSubmitLoginForm} />
      </S.LeftSideContainer>
      <S.RightSide>
        <BigLogo />
      </S.RightSide>
    </S.Container>
  );
};
