import { useSetRecoilState } from 'recoil';
import { api } from '@service';

import { auth, app } from '@recoil';
import { dataview } from '~/models';

export const useAuthentication = () => {
  const setToken = useSetRecoilState(auth.atom.token);
  const setLoading = useSetRecoilState(app.appLoading);

  const login = async (credentials: dataview.AuthenticateUser) => {
    try {
      setLoading(true);
      const response = await api.loginApiService({
        email: credentials.username,
        senha: credentials.password,
      });
      localStorage.setItem('refreshToken', response.data.token);
      setToken(response.data.token);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    login,
  };
};
