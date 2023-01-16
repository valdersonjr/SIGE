import React from 'react';
import * as S from './Title.style';

import { TitleProps } from './Title.interface';

export const Title: React.FC<TitleProps> = ({ size = '24px', children, color }) => {
  return <S.Title style={{ fontSize: size, color:color }}>{children}</S.Title>;
};
