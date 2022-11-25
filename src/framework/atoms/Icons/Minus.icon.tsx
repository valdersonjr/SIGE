import { SVGProps } from 'react';

export const MinusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={10} height={3} fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M.916 1.313h8.166'
      stroke={props.color}
      strokeWidth={1.8}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
