import styled, { css } from 'styled-components';
import {ButtonProps, VariantButtonEnum} from "@atoms/Button/Button.interface";
import {getVariant} from "@atoms/Button/Button.style";

export const Button = styled.button<ButtonProps>`
  ${({ variant = VariantButtonEnum.PRIMARY, selected, justifyText}) => css`
    ${getVariant(variant, Boolean(selected))};

    display: flex;
    justify-content: ${justifyText};
    align-items: center;
    width: 100%;
    cursor: pointer;
    padding: 12px 32px;

    &:disabled {
      cursor: not-allowed;
    }
  `}
`;
export const Label = styled.span`
  font-weight: 600;
  font-size: 15px;
  margin: 0 8px 0 8px;
`;
export const LeftIconContainer = styled.span`
`;
