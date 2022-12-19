import { Routes, Route } from 'react-router-dom';

import HomePage from '~/framework/pages/Home/Home.page';
import UsersPage from '~/framework/pages/Users/Users.page';
import ReportsPage from '~/framework/pages/Report/Reports.page';
import StudentsPage from '~/framework/pages/Students/Students.page';
import ManagementPage from '~/framework/pages/Management/Management.page';
import ViewClassesPage from '~/framework/pages/Management/ViewClass/ViewClass.page';
import ViewStudentPage from '~/framework/pages/Students/ViewStudent/ViewStudent.page';
import RegisterStudentPage from '~/framework/pages/Students/RegisterStudent/RegisterStudent.page';

import PageBase from '~/framework/templates/PageBase/PageBase.template';


export const AuthenticatedRoutes: React.FC = () => {
  return (
    <Routes data-testid='routes'>
      <Route path='/' element={<PageBase />}>
        <Route index element={<HomePage />} />
        <Route path='/alunos' element={<StudentsPage />} />
        <Route path='/alunos/novo-aluno' element={<RegisterStudentPage />} />
        <Route path='/alunos/visualizar-aluno' element={<ViewStudentPage />} />
        <Route path='/gestao-escolar' element={<ManagementPage />} />
        <Route path='/gestao-escolar/visualizar-turmas' element={<ViewClassesPage />} />
        <Route path='/usuarios' element={<UsersPage />} />
        <Route path='/relatorios' element={<ReportsPage />} />
      </Route>
    </Routes>
  );
};
