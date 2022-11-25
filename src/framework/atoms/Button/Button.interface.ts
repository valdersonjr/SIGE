export enum VariantButtonEnum {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TEXT = 'text',
  SMALL_PRIMARY = 'small-primary',
  SMALL_SECONDARY = 'small-secondary',
  SMALL_TEXT = 'small-text',
  GRADIENT_PRIMARY = 'gradient-primary'
}
export type VariantButtonType =
  | VariantButtonEnum.PRIMARY
  | VariantButtonEnum.SECONDARY
  | VariantButtonEnum.TEXT
  | VariantButtonEnum.SMALL_PRIMARY
  | VariantButtonEnum.SMALL_SECONDARY
  | VariantButtonEnum.SMALL_TEXT
  | VariantButtonEnum.GRADIENT_PRIMARY;

export interface ButtonInternalProps {
  variant?: VariantButtonType;
  selected?: boolean;
}

export interface ButtonProps extends ButtonInternalProps {
  onClick?: () => void;
  label?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}
