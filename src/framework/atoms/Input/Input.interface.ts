export interface InputProps {
  onChange: (value: string) => void;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}
