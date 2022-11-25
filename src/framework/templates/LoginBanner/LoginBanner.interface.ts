import { AuthenticateUser } from '~/models/dataview/AuthenticateUser.interface';

export interface LeftSideLoginProps {
  submitLoginForm: (value: AuthenticateUser) => void;
  buttonRegisterText?: string;
  buttonForgotPasswordText?: string;
  title?: string;
  paragraph?: string;
}
