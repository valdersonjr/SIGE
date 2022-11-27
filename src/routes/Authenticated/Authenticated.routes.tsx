import { Routes, Route } from 'react-router-dom';
import HomePage from '~/framework/pages/Home/Home.page';
import ManagementPage from '~/framework/pages/Management/Management.page';
import ReportsPage from '~/framework/pages/Report/Report.page';
import StudentsPage from '~/framework/pages/Students/Students.page';
import UsersPage from '~/framework/pages/Users/Users.page';
import PageBase from '~/framework/templates/PageBase/PageBase.template';

export const AuthenticatedRoutes: React.FC = () => {
  return (
    <Routes data-testid='routes'>
      <Route path='/' element={<PageBase />}>
        <Route index element={<HomePage />} />
        <Route path='/alunos' element={<StudentsPage />} />
        <Route path='/gestao-escolar' element={<ManagementPage />} />
        <Route path='/usuarios' element={<UsersPage />} />
        <Route path='/relatorios' element={<ReportsPage />} />
      </Route>
    </Routes>
  );
};
