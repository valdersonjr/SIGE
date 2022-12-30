import styled, { css } from 'styled-components';

export const Input = styled.input.attrs({type: 'file'})`
  ${({theme}) => css`
    ${theme.components.input}
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 34px;
      opacity: 0;
      cursor: pointer;
  `}
`;
