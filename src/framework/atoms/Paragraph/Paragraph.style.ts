import styled from 'styled-components';
import { ParagraphProps } from './Paragraph.interface';

export const Paragraph = styled.p<ParagraphProps>`
  font-style: normal;
  font-weight: 600;
  font-size: ${({ size }) => size || ''};
  line-height: 110%;
  color: #ededed;
  text-align: ${({ textAlign }) => textAlign || ''}; ;
`;
