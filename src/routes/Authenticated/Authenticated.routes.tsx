import { Routes, Route } from 'react-router-dom';
import HomePage from '~/framework/pages/Home/Home.page';
import PageBase from '~/framework/templates/PageBase/PageBase.template';

export const AuthenticatedRoutes: React.FC = () => {
  return (
    <Routes data-testid='routes'>
      <Route path='/' element={<PageBase />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};
