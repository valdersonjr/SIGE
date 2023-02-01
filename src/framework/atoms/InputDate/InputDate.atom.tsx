import React from 'react';
import * as S from './InputDate.style';
import DatePicker from 'react-datepicker';
import {InputDateProps} from "@atoms/InputDate/InputDate.interface";
import "react-datepicker/dist/react-datepicker.css";

export const InputDate: React.FC<InputDateProps> = (props) => {
    return (
        <S.Container>
            <S.Label>{props.label}</S.Label>
            <DatePicker
                todayButton="Hoje"
                selected={props.value}
                onChange={props.onChange}
                placeholderText="mm/dd/yyyy"
                isClearable={true}
            />
        </S.Container>
    )
};
