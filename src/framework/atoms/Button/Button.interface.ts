export enum VariantButtonEnum {
  PRIMARY = 'primary',
  SMALL_PRIMARY = 'small-primary',
  PRIMARY_TRANSPARENT = 'primary-transparent',
  SECONDARY = 'secondary',
  SMALL_SECONDARY = 'small-secondary',
  SECONDARY_TRANSPARENT = 'secondary-transparent',
  TEXT = 'text',
  SMALL_TEXT = 'small-text',
  GRADIENT_PRIMARY = 'gradient-primary'
}
export type VariantButtonType =
  | VariantButtonEnum.PRIMARY
  | VariantButtonEnum.SMALL_PRIMARY
  | VariantButtonEnum.PRIMARY_TRANSPARENT
  | VariantButtonEnum.SECONDARY
  | VariantButtonEnum.SMALL_SECONDARY
  | VariantButtonEnum.SECONDARY_TRANSPARENT
  | VariantButtonEnum.TEXT
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
