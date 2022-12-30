import React from 'react';

export interface InputImageProps {
    onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
    style?: React.CSSProperties;
}
