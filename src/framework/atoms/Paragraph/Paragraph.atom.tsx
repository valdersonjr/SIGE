import React from 'react';
import * as S from './Paragraph.style';

import { ParagraphProps } from './Paragraph.interface';

export const Paragraph: React.FC<ParagraphProps> = ({ textAlign, size = '1vw', children }) => {
  return (
    <S.Paragraph size={size} textAlign={textAlign}>
      {children}
    </S.Paragraph>
  );
};
