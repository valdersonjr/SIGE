import { InputProps } from '@atoms/Input/Input.interface';

export interface InputInLabelProps extends InputProps {
  label?: string;
  disabled?: boolean;
  onChange: (any:any) => void;
  required?:boolean;
  min?:number;
}
