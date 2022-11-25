import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const InputContainer = styled.div`
  ${() => css`
    padding: 8px 0;
    display: flex;
    align-items: center;
  `}
`;

export const LabelContainer = styled.div`
  ${({ theme }) => css`
    font-size: 15px;
    font-weight: 600;
    color: ${theme.palette.dark.tint};
  `}
`;

export const ButtonContainer = styled.div`
  margin-left: 16px;
`;
export const Button = styled.button`
  ${({ theme }) => css`
    padding: 10px 20px;

    background-color: ${theme.palette.light.tint};
    border-radius: 4px;
    box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);

    border: 1px solid ${theme.palette.light.shade};

    cursor: pointer;
  `}
`;
