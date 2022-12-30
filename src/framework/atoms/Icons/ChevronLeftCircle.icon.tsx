import { SVGProps } from 'react';

export const ChevronLeftCircle = ({ color, ...props }: SVGProps<SVGSVGElement>) => (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect width="44" height="44" rx="8" fill="#EDF2F7" />
        <path d="M22 32C27.5228 32 32 27.5228 32 22C32 16.4772 27.5228 12 22 12C16.4772 12 12 16.4772 12 22C12 27.5228 16.4772 32 22 32Z" stroke="#35A7FF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M23.2602 25.53L19.7402 22L23.2602 18.47" stroke="#35A7FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
