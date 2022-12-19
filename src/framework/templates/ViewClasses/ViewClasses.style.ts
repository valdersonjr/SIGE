import styled from "styled-components";
import { theme } from "~/theme";

export const Container = styled.div`
    width: 94%;
    
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const FindClassContainer = styled.div`
    min-width: 100%;
    min-height: 100%;
    padding: 22px;
    
    background-color: ${theme.palette.light.tint};
    
    display: flex;
    flex-direction: column;
    gap: 22px;

    border-bottom: 1px solid #EDEDED;
    box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
`

export const FilterContainer = styled.div`
    position: relative;
    padding: 4px;

    display: flex;
    flex-direction: row;
    gap: 8px;

    align-items: center;
`

export const InputContainer = styled.div`
    width: 170px;
`

export const ButtonContainer = styled.div`
    position: absolute;
    right: 0;

    margin-left: 32px;
    margin-top: 16px;

    display: flex;
    flex-direction: row;
    gap: 8px;
`

export const ButtonResize = styled.div`
    width: 250px;
    height: 50px;
`