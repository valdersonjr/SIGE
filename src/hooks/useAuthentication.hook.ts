import { useSetRecoilState } from 'recoil';
import { api } from '@service';

import { auth, app } from '@recoil';
import { dataview } from '~/models';
import {useNavigate} from "react-router-dom";
import { selectedSidebar } from '~/recoil/sidebar/sidebar.atom';

export const useAuthentication = () => {
  const setSelectedSection = useSetRecoilState(selectedSidebar);
  const setToken = useSetRecoilState(auth.atom.token);
  const setLoading = useSetRecoilState(app.appLoading);

  const navigate = useNavigate();

  const login = async (credentials: dataview.AuthenticateUser) => {
    try {
      setLoading(true);
      const response = await api.loginApiService({
        email: credentials.username,
        senha: credentials.password,
      });
      // @ts-ignore
      localStorage.setItem('refreshToken', response.data.access_token);
      // @ts-ignore
      setToken(response.data.access_token);
      // @ts-ignore
      localStorage.setItem('access_token', response.data.access_token);
      setSelectedSection(0);
      setLoading(false);
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('Email ou senha inválidos');
    }
  };

  return {
    login,
  };
};
