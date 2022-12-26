import React from 'react';

import { ButtonProps, VariantButtonEnum, VariantButtonType } from './Button.interface';

import * as S from './Button.style';

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  disabled,
  leftIcon,
  rightIcon,
  variant,
  type,
  selected,
  ...props
}) => {
  return (
    <S.Button {...props} type={type} disabled={disabled} onClick={onClick} variant={variant} selected={selected}>
      {leftIcon && <S.LeftIconContainer>{leftIcon}</S.LeftIconContainer>}
      <S.Label>{label}</S.Label>
      {rightIcon && <S.RightIconContainer>{rightIcon}</S.RightIconContainer>}
    </S.Button>
  );
};
export { Button, VariantButtonEnum };
export type { VariantButtonType };
