import React from 'react';

import CurrencyInput from 'react-currency-input-field';

import { InputProps } from './Input.interface';
import * as S from './Input.style';

export const Input: React.FC<InputProps> = ({ value, onChange, disabled, placeholder, style, name, type, required, min, pattern, mask }) => {
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onChange(evt.target.value);
  };

  if (type === "currency") {
    return <CurrencyInput
      required={required}
      disabled={disabled}
      name={name}
      max={10}
      prefix='R$'
      intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
      style={{ "backgroundColor": "#f7f7f7", "borderRadius": "6px", "padding": "3% 5%", "border": "none", "color": "#4a4a4a", "height": "6vh", "width": "100%", "outline": "0", "fontSize": "0.9vw" }}
      placeholder={placeholder}
      decimalsLimit={2}
      decimalSeparator=","
      groupSeparator='.'
      onChange={handleChange}
    />;
  }


  return (
    <S.InputTest
      mask={mask ? mask : ""}
      pattern={pattern}
      min={min}
      required={required}
      type={type}
      name={name}
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      style={style}
    />
  );
};