import React from 'react';

import { InputSelectInLabelProps } from './InputSelectInLabel.interface';
import { SelectInLabel } from '@atoms';
// import * as S from './InputInLabel.style';

export const InputSelectInLabel: React.FC<InputSelectInLabelProps> = ({
    label,
    options,
    disabled,
    onChange,
}) => {
    const handleChange = (value: string) => {
        onChange(value);
    };

    return (
        <SelectInLabel disabled={disabled} label={label} options={options} onChange={handleChange} />
    );
};
