import styled, { css } from 'styled-components';

export const LabelContainer = styled.label`
  ${({ theme }) => css`
    width: 100%;
    font-size: 0.8vw;
    font-weight: 600;
    color: ${theme.palette.dark.tint};
    input {
      margin-top: 8px;
    }
  `}
`;
