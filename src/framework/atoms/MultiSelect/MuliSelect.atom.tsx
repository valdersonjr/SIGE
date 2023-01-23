import Select from 'react-select';
import { MultiSelectProps } from './MultiSelect.interface';

import * as S from "./MultiSelect.syle";
 

const MultiSelect:React.FC <MultiSelectProps> = ({ label, options, onChange }) => {
    return(
        <S.Container>
            <S.Label>{label}</S.Label>
            <Select  isMulti styles={{control: (baseStyles) => ({
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
            })}} options={options} onChange={onChange} />
        </S.Container>
    );
}

export default MultiSelect;
