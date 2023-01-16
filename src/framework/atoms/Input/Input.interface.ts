import React from "react";

export interface InputProps {
  name?:string;
  onChange: (value: string) => void;
  value: string | number;
  placeholder?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  type?:string;
  required?: boolean;
}
