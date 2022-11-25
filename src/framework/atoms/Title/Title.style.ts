import styled, { css } from 'styled-components';

export const Title = styled.h1`
  ${({ theme }) => css`
    font-family: 'Futura PT', sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: 110%;
    color: ${theme.palette.primary.base};
  `}
`;
