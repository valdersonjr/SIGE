import { Outlet } from 'react-router-dom';

import * as S from './PageBase.style';

const PageBase: React.FC = () => {
  return (
    <S.Container data-testid='route-layout'>
      Page Base
      <Outlet />
    </S.Container>
  );
};
export default PageBase;
