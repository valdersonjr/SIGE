import React from 'react';

import { InputProps } from './Input.interface';
import * as S from './Input.style';

export const Input: React.FC<InputProps> = ({ value, onChange, disabled, placeholder, style, name }) => {
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onChange(evt.target.value);
  };
  return (
    <S.Input
      name={name}
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      style={style}
    />
  );
};
