import { SVGProps } from 'react';

export const ChevronUpCircle = ({ color, ...props }: SVGProps<SVGSVGElement>) => (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g filter="url(#filter0_d_10112_2919)">
            <path d="M15 21C20.5228 21 25 16.5228 25 11C25 5.47715 20.5228 1 15 1C9.47715 1 5 5.47715 5 11C5 16.5228 9.47715 21 15 21Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges" />
        </g>
        <defs>
            <filter id="filter0_d_10112_2919" x="0.25" y="0.25" width="29.5" height="29.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10112_2919" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10112_2919" result="shape" />
            </filter>
        </defs>
    </svg>
);
