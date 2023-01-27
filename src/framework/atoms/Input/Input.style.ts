import styled, { css } from 'styled-components';
import InputMask from 'react-input-mask';

export const Input = styled.input`
  ${({ theme }) => css`
    ${theme.components.input}
    height: 6vh;
    width: 100%;
    outline: 0;
    font-size: 14px;
  `}
`;

export const InputTest = styled(InputMask)`
  ${({ theme }) => css`
    ${theme.components.input}
    height: 6vh;
    width: 100%;
    outline: 0;
      font-size: 14px;
    `}
`
