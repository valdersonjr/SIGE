import styled from "styled-components";
import { theme } from "~/theme";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    padding: 4px;
`

export const Label = styled.label`
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: #425466;
`

export const Select = styled.select`
    background-color: #F7F7F7;
    width: 170px;
    height: 40px;
    
    padding: 4px 8px;

    border: none;
    border-radius: 6px;
`