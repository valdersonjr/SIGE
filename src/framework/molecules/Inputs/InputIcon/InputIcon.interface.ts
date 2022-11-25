import { InputProps } from '@atoms/Input/Input.interface';
import React from 'react';

export interface IconInputInternalProps extends InputProps {
  errorMessage: boolean;
}

export interface IconInputProps extends InputProps {
  label?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
  icon: React.ReactNode;

  iconRightSide?: boolean;
  iconLeftSide?: boolean;
}
