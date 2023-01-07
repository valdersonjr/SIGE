import React from 'react';

import { InputInLabelProps } from './InputInLabel.interface';

import { Input } from '@atoms';
import * as S from './InputInLabel.style';

export const InputInLabel: React.FC<InputInLabelProps> = ({
  name,
  value,
  onChange,
  placeholder,
  label,
  disabled,
  style,
}) => {

  const handleChange = (value: string) => {
    onChange(value);
  };

  return (
    <S.LabelContainer>
      {label}
      <Input
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        style={style}
      />
    </S.LabelContainer>
  );
};
