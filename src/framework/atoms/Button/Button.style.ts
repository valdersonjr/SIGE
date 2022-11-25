import styled, { css } from 'styled-components';
import { ButtonInternalProps, VariantButtonType, VariantButtonEnum } from './Button.interface';

export const getVariant = (variant: VariantButtonType) => {
  const buttonStyle = (v = variant) => {
    if (
      v === VariantButtonEnum.PRIMARY ||
      v === VariantButtonEnum.SECONDARY ||
      v === VariantButtonEnum.TEXT
    ) {
      return css`
        padding: 3% 0px;
        font-size: 0.9vw;
      `;
    } else if (
      v === VariantButtonEnum.SMALL_PRIMARY ||
      v === VariantButtonEnum.SMALL_SECONDARY ||
      v === VariantButtonEnum.SMALL_TEXT
    ) {
      return css`
        padding: 2% 0px;
        font-size: 0.8vw;
      `;
    }
  };

  switch (variant) {
    case VariantButtonEnum.PRIMARY:
    case VariantButtonEnum.SMALL_PRIMARY:
      return css`
        ${({ theme }) => css`
          ${buttonStyle()}

          background-color: ${theme.palette.primary.base};
          color: ${theme.palette.light.tint};
          box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
          border-radius: 20px;
          border: none;

          &:hover {
            background: ${theme.palette.primary.shade};
          }

          &:disabled {
            background-color: #a0a0a0;
          }
        `}
      `;

    case VariantButtonEnum.SECONDARY:
    case VariantButtonEnum.SMALL_SECONDARY:
      return css`
        ${({ theme }) => css`
          ${buttonStyle()}

          background-color: ${theme.palette.light.tint};
          color: ${theme.palette.primary.base};
          box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
          border-radius: 20px;
          border: 1px solid ${theme.palette.primary.base};

          &:disabled {
            background-color: #e4e4e4;
            color: #a0a0a0;
            border-color: #e4e4e4;
          }
        `}
      `;

    case VariantButtonEnum.TEXT:
    case VariantButtonEnum.SMALL_TEXT:
      return css`
        ${({ theme }) => css`
          ${buttonStyle()}

          background-color: ${theme.palette.light.tint};
          color: ${theme.palette.primary.base};
          border: none;

          &:hover {
            color: ${theme.palette.primary.shade};
          }

          &:disabled {
            color: #e4e4e4;
          }
        `}
      `;

    default:
      break;
  }
};

export const Button = styled.button<ButtonInternalProps>`
  ${({ variant = VariantButtonEnum.PRIMARY }) => css`
    ${getVariant(variant)}
    font-weight: 600;
    width: 100%;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  `}
`;

export const LeftIconContainer = styled.span`
  margin-right: calc(100% - 13px);
`;
export const RightIconContainer = styled.span`
  margin-left: 13px;
`;
