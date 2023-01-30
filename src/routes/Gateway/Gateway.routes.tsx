import React from 'react';
import {Routes, Route} from 'react-router-dom';

import {LoginPage} from "~/framework/pages";
import HomePage from "~/framework/pages/Home/Home.page";
import StudentsPage from "~/framework/pages/Students/Students.page";
import ManagementPage from "~/framework/pages/Management/Management.page";
import RegistrationPage from '~/framework/pages/Registration/Registration.page';
import ViewStudentPage from "~/framework/pages/Students/ViewStudent/ViewStudent.page";
import ViewClassesPage from "~/framework/pages/Management/ViewClasses/ViewClasses.page";
import NewClassPage from "~/framework/pages/Management/ViewClasses/NewClass/NewClass.page";
import ViewClassPage from "~/framework/pages/Management/ViewClasses/ViewClass/ViewClass.page";
import ViewActivitiesPage from "~/framework/pages/Management/ViewActivities/ViewActivities.page";
import RegisterStudentPage from "~/framework/pages/Students/RegisterStudent/RegisterStudent.page";
import ViewActivityPage from "~/framework/pages/Management/ViewActivities/ViewActivity/ViewActivity.page";
import ViewRegistrationsPage from "~/framework/pages/Management/ViewRegistrations/ViewRegistrations.page";
import NewActivityPage from "~/framework/pages/Management/ViewActivities/NewActivity/NewActivityPage.page";
import NewRegistrationPage from "~/framework/pages/Management/ViewRegistrations/NewRegistration/NewRegistration.page";
// import ViewTeachersPage from "~/framework/pages/Management/ViewTeachers/ViewTeachers.page";
// import ViewTeacherPage from "~/framework/pages/Management/ViewTeachers/ViewTeacher/ViewTeacher.page";
import UsersPage from "~/framework/pages/Users/Users.page";
import RegisterUserPage from "~/framework/pages/Users/RegisterUser/RegisterUser.page";
import ViewUserPage from "~/framework/pages/Users/ViewUser/ViewUser.page";
import ReportsPage from "~/framework/pages/Reports/Reports.page";
import {PrivateRoute} from "~/routes/PrivateRoute/PrivateRoute";
import PageBase from "@templates/PageBase/PageBase.template";
// import {Navigate} from "react-router";
// import { selectedSidebar } from '~/recoil/sidebar/sidebar.atom';
// import { useSetRecoilState } from 'recoil';

export const Gateway: React.FC = () => {
    // const setSelectedSection = useSetRecoilState(selectedSidebar);
    //
    // location.pathname.includes('/alunos') && setSelectedSection(1);
    // location.pathname.includes('/gestao-escolar') && setSelectedSection(2);
    // location.pathname.includes('/usuarios') &&  setSelectedSection(3);
    // location.pathname.includes('/relatorios') &&  setSelectedSection(4);

     return(
        <Routes>
        {/* UNAUTHENTICATED ROUTES */}
        <Route index path='/login' element={<LoginPage/>}/>
        <Route path='/cadastrar' element={<RegistrationPage/>}/>

        {/* AUTHENTICATED ROUTES */}
        <Route path='/' element={<PrivateRoute><PageBase/></PrivateRoute>}>
            <Route index element={<PrivateRoute><HomePage/></PrivateRoute>}/>

            <Route path='/alunos' element={<PrivateRoute><StudentsPage/></PrivateRoute>}/>
            <Route path='/alunos/novo-aluno' element={<PrivateRoute><RegisterStudentPage/></PrivateRoute>}/>
            <Route path='/alunos/visualizar-aluno/:id' element={<PrivateRoute><ViewStudentPage/></PrivateRoute>}/>

            <Route path='/gestao-escolar' element={<PrivateRoute><ManagementPage/></PrivateRoute>}/>

            <Route path='/gestao-escolar/visualizar-turmas' element={<PrivateRoute><ViewClassesPage/></PrivateRoute>}/>
            <Route path='/gestao-escolar/visualizar-turmas/turma/:id' element={<PrivateRoute><ViewClassPage/></PrivateRoute>}/>
            <Route path='/gestao-escolar/nova-turma' element={<PrivateRoute><NewClassPage/></PrivateRoute>}/>

            <Route path='/gestao-escolar/visualizar-atividades' element={<PrivateRoute><ViewActivitiesPage/></PrivateRoute>}/>
            <Route path='/gestao-escolar/visualizar-atividades/atividade/:id' element={<PrivateRoute><ViewActivityPage/></PrivateRoute>}/>
            <Route path='/gestao-escolar/nova-atividade' element={<PrivateRoute><NewActivityPage/></PrivateRoute>}/>

            <Route path='/gestao-escolar/visualizar-matriculas' element={<PrivateRoute><ViewRegistrationsPage/></PrivateRoute>}/>
            <Route path='/gestao-escolar/nova-matricula' element={<PrivateRoute><NewRegistrationPage/></PrivateRoute>}/>

            {/* <Route path='/gestao-escolar/visualizar-professores' element={<PrivateRoute><ViewTeachersPage/></PrivateRoute>}/> */}
            {/* <Route path='/gestao-escolar/visualizar-professores/professor' element={<PrivateRoute><ViewTeacherPage/></PrivateRoute>}/> */}

            <Route path='/usuarios' element={<PrivateRoute><UsersPage/></PrivateRoute>}/>
            <Route path='/usuarios/novo-usuario' element={<PrivateRoute><RegisterUserPage/></PrivateRoute>}/>
            <Route path='/usuarios/visualizar-usuario/:id' element={<PrivateRoute><ViewUserPage/></PrivateRoute>}/>

            <Route path='/relatorios' element={<PrivateRoute><ReportsPage/></PrivateRoute>}/>
            
            {/*<Route path="*" element={<>{setSelectedSection(0)}<Navigate to="/"/></>}/>*/}
        </Route>
    </Routes>
    )
};
