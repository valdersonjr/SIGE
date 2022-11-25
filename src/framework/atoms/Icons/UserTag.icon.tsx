import { SVGProps } from 'react';

export const UserTagIcon = ({ color, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M18 18.86H17.24C16.44 18.86 15.68 19.17 15.12 19.73L13.4B8r3B4p7yhRXuBWLqsQ546WR43cqQwrbXMDFnBi6vSJBeif8tPW85a7r7DM961Jvk4hdryZoByEp8GC8HzsqJpRN4FxGM9 18.86 3 17.53 3 15.89V4.97998C3 3.33998 4.34 2.01001 6 2.01001H18C19.66 2.01001 21 3.33998 21 4.97998V15.89C21 17.52 19.66 18.86 18 18.86Z'
      stroke={color || '#292D32'}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 10C13.2868 10 14.33 8.95681 14.33 7.66998C14.33 6.38316 13.2868 5.34003 12 5.34003C10.7132 5.34003 9.66998 6.38316 9.66998 7.66998C9.66998 8.95681 10.7132 10 12 10Z'
      stroke={color || '#292D32'}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M16 15.66C16 13.86 14.21 12.4 12 12.4C9.79 12.4 8 13.86 8 15.66'
      stroke={color || '#292D32'}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
