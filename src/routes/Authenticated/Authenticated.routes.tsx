import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '~/framework/pages/Home/Home.page';
import UsersPage from '~/framework/pages/Users/Users.page';
import ReportsPage from '~/framework/pages/Reports/Reports.page';
import StudentsPage from '~/framework/pages/Students/Students.page';
import ManagementPage from '~/framework/pages/Management/Management.page';
import ViewStudentPage from '~/framework/pages/Students/ViewStudent/ViewStudent.page';
import ViewClassesPage from '~/framework/pages/Management/ViewClasses/ViewClasses.page';
import ViewClassPage from '~/framework/pages/Management/ViewClasses/ViewClass/ViewClass.page';
import RegisterStudentPage from '~/framework/pages/Students/RegisterStudent/RegisterStudent.page';

import PageBase from '~/framework/templates/PageBase/PageBase.template';
import RegisterUserPage from "~/framework/pages/Users/RegisterUser/RegisterUser.page";
import ViewActivitiesPage from "~/framework/pages/Management/ViewActivities/ViewActivities.page";
import ViewRegistrationsPage from "~/framework/pages/Management/ViewRegistrations/ViewRegistrations.page";
import ViewTeachersPage from "~/framework/pages/Management/ViewTeachers/ViewTeachers.page";
import ViewTeacherPage from "~/framework/pages/Management/ViewTeachers/ViewTeacher/ViewTeacher.page";

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
        <Route path='/gestao-escolar/visualizar-turmas/turma' element={<ViewClassPage />} />
        <Route path='/gestao-escolar/visualizar-atividades' element={<ViewActivitiesPage />} />
        <Route path='/gestao-escolar/visualizar-matriculas' element={<ViewRegistrationsPage />} />
        <Route path='/gestao-escolar/visualizar-professores' element={<ViewTeachersPage />} />
        <Route path='/gestao-escolar/visualizar-professores/professor' element={<ViewTeacherPage />} />

        <Route path='/usuarios' element={<UsersPage />} />
        <Route path='/usuarios/novo-usuario' element={<RegisterUserPage />} />

        <Route path='/relatorios' element={<ReportsPage />} />
      </Route>
    </Routes>
  );
};
