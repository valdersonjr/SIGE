import { SVGProps } from 'react';

export const ThrashIcon = ({ color, ...props }: SVGProps<SVGSVGElement>) => (
    <svg width="41" height="40" viewBox="0 -5 41 45" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g filter="url(#filter0_d_11063_4489)">
            <rect x="4.7998" width="32" height="32" rx="4" fill="#F7979D" shapeRendering="crispEdges" />
            <path d="M29.7998 9.97998C26.4698 9.64998 23.1198 9.47998 19.7798 9.47998C17.7998 9.47998 15.8198 9.57998 13.8398 9.77998L11.7998 9.97998" stroke="#FF5964" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.2998 8.97L17.5198 7.66C17.6798 6.71 17.7998 6 19.4898 6H22.1098C23.7998 6 23.9298 6.75 24.0798 7.67L24.2998 8.97" stroke="#FF5964" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M27.6502 13.1399L27.0002 23.2099C26.8902 24.7799 26.8002 25.9999 24.0102 25.9999H17.5902C14.8002 25.9999 14.7102 24.7799 14.6002 23.2099L13.9502 13.1399" stroke="#FF5964" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19.1299 20.5H22.4599" stroke="#FF5964" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.2998 16.5H23.2998" stroke="#FF5964" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <filter id="filter0_d_11063_4489" x="0.799805" y="0" width="40" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11063_4489" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11063_4489" result="shape" />
            </filter>
        </defs>
    </svg>

);
