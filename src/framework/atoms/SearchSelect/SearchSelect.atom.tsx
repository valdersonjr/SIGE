import React from 'react';
import * as S from './SearchSelect.style';
import {SelectSearchProps} from "@atoms/SearchSelect/Search.interface";
import Select from "react-select";

export const SearchSelect: React.FC<SelectSearchProps> = (props) => (
    <S.Container>
        <S.Label>{props.label}</S.Label>
        <Select styles={{
            control: (baseStyles) => ({
                ...baseStyles,
                height: "6vh",
                width: "100%",
                fontSize: "14px",
                backgroundColor: "#F7F7F7",
                padding: "4px 12px",
                border: "none",
                borderRadius: "6px",
                boxShadow: '0 !important',
                '&:hover': {
                    border: '0 !important',
                    cursor: "pointer"
                }
            })
        }} options={props.options} onChange={props.onChange} value={props.value}/>
    </S.Container>
);
