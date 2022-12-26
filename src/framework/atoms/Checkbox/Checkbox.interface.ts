export interface CheckboxInternalProps {
  checked?: boolean;
  interminateChecked?: boolean;
  disabled?: boolean;
  mt?: number;
}

export interface CheckboxProps extends CheckboxInternalProps {
  label: string;
  onChange: (value: boolean) => void;
}
