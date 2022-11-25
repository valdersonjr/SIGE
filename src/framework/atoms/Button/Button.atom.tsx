import React from 'react';
import * as S from './Button.style';

import { ButtonProps, VariantButtonEnum, VariantButtonType } from './Button.interface';

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
      {label}
      {rightIcon && <S.RightIconContainer>{rightIcon}</S.RightIconContainer>}
    </S.Button>
  );
};
export { Button, VariantButtonEnum };
export type { VariantButtonType };
