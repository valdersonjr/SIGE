import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthenticatedRoutes } from '../Authenticated/Authenticated.routes';
import { NotAuthenticatedRoutes } from '../NotAuthenticated/NotAuthenticated.routes';

import { auth } from '@recoil';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { selectedSidebar } from "~/recoil/sidebar/sidebar.atom";

export const Gateway: React.FC = () => {
  const token = useRecoilValue(auth.atom.token);
  const setSelectedSection = useSetRecoilState(selectedSidebar)

  location.pathname.includes('/alunos') && setSelectedSection(1);
  location.pathname.includes('/gestao-escolar') && setSelectedSection(2);
  location.pathname.includes('/usuarios') && setSelectedSection(3);
  location.pathname.includes('/relatorios') && setSelectedSection(4);

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
