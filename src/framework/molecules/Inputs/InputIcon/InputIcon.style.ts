import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const InputContainer = styled.div<{ adaptLeftSideIcon: boolean }>`
  ${({ adaptLeftSideIcon }) => css`
    position: relative;
    padding: 8px 0;
    display: flex;
    align-items: center;

    ${adaptLeftSideIcon &&
    css`
      & > input {
        padding-left: 8%;
      }
    `}
  `}
`;

export const LabelContainer = styled.div`
  ${({ theme }) => css`
    font-size: 0.9375em;
    font-weight: 600;
    color: ${theme.palette.dark.tint};
  `}
`;

export const IconContainerRightSide = styled.div`
  ${() => css`
    display: flex;
    right: 0;
    position: absolute;
    margin-right: 17px;
  `}
`;
export const IconContainerLeftSide = styled.div`
  ${() => css`
    display: flex;
    left: 0;
    position: absolute;
    margin-left: 17px;
  `}
`;
