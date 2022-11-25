import React from 'react';
import * as S from './Title.style';

import { TitleProps } from './Title.interface';

export const Title: React.FC<TitleProps> = ({ size = '1.3vw', children }) => {
  return <S.Title style={{ fontSize: size }}>{children}</S.Title>;
};
