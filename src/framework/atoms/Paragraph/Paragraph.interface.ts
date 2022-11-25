export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: string | number;
  textAlign?: 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent';
}
