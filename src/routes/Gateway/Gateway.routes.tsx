import { Routes, Route } from 'react-router-dom';
import { AuthenticatedRoutes } from '../Authenticated/Authenticated.routes';
import { NotAuthenticatedRoutes } from '../NotAuthenticated/NotAuthenticated.routes';

import { auth } from '@recoil';
import { useRecoilValue } from 'recoil';

export const Gateway: React.FC = () => {
  const token = useRecoilValue(auth.atom.token);

  if (!token) {
    return (
      <Routes>
        <Route path='*' element={<NotAuthenticatedRoutes />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path='*' element={<AuthenticatedRoutes />} />
    </Routes>
  );
};
