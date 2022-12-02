import { Outlet } from 'react-router-dom';

import { SideBar } from '~/framework/organisms';

import * as S from './PageBase.style';

const PageBase: React.FC = () => {
  return (
    <S.Container data-testid='route-layout'>
      <SideBar />
      <Outlet />
    </S.Container>
  );
};
export default PageBase;
