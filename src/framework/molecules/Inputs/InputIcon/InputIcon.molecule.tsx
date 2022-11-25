import React from 'react';

import { IconInputProps } from './InputIcon.interface';

import { Input } from '@atoms';
import * as S from './InputIcon.style';

export const IconInput: React.FC<IconInputProps> = ({
  value,
  onChange,
  placeholder,
  label,
  disabled,
  icon,
  iconRightSide = true,
  iconLeftSide,
}) => {
  const handleChange = (value: string) => {
    onChange(value);
  };

  return (
    <S.Container>
      {!!label && <S.LabelContainer>{label}</S.LabelContainer>}

      <S.InputContainer adaptLeftSideIcon={!!iconLeftSide}>
        <Input
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          disabled={disabled}
        />

        {iconRightSide && <S.IconContainerRightSide>{icon}</S.IconContainerRightSide>}
        {iconLeftSide && <S.IconContainerLeftSide>{icon}</S.IconContainerLeftSide>}
      </S.InputContainer>
    </S.Container>
  );
};
