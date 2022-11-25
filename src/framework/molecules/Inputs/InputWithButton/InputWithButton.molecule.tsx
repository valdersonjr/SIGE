import React from 'react';

import { IconInputProps } from './InputWithButton.interface';

import { Input } from '@atoms';
import * as S from './InputWithButton.style';

export const InputWithButton: React.FC<IconInputProps> = ({
  value,
  onChange,
  placeholder,
  label,
  disabled,
  icon,
}) => {
  const handleChange = (value: string) => {
    onChange(value);
  };

  return (
    <S.Container>
      {!!label && <S.LabelContainer>{label}</S.LabelContainer>}

      <S.InputContainer>
        <Input
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          disabled={disabled}
        />

        <S.ButtonContainer>
          <S.Button>{icon}</S.Button>
        </S.ButtonContainer>
      </S.InputContainer>
    </S.Container>
  );
};
