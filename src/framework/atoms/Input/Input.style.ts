import styled, { css } from 'styled-components';
export const Input = styled.input`
  ${({ theme }) => css`
    ${theme.components.input}
    height: 6vh;
    width: 100%;
    outline: 0;
    font-size: 0.9vw;
  `}
`;
