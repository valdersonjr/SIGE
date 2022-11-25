import { InputProps } from '@atoms/Input/Input.interface';

export interface InputInLabelProps extends InputProps {
  label?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
}
