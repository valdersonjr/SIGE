export interface CheckboxInternalProps {
  checked?: boolean;
  interminateChecked?: boolean;
  disabled?: boolean;
}

export interface CheckboxProps extends CheckboxInternalProps {
  label: string;
  onChange: (value: boolean) => void;
}
