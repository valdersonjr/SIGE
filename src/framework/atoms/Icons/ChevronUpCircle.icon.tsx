import { SVGProps } from 'react';

export const ChevronUpCircle = ({ color, ...props }: SVGProps<SVGSVGElement>) => (
    <svg width="30" height="31" viewBox="-3 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g filter="url(#filter0_d_10112_2916)">
            <path d="M15 22C20.5228 22 25 17.5228 25 12C25 6.47715 20.5228 2 15 2C9.47715 2 5 6.47715 5 12C5 17.5228 9.47715 22 15 22Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges"/>
        </g>
        <path d="M11.47 13.26L15 9.73999L18.53 13.26" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <defs>
        <filter id="filter0_d_10112_2916" x="0.25" y="1.25" width="29.5" height="29.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10112_2916"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10112_2916" result="shape"/>
        </filter>
    </defs>
    </svg>
);
