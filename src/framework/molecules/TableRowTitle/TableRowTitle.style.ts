import styled from "styled-components";
import { theme } from "~/theme";

export const Container = styled.div`
    background-color: ${theme.palette.light.tint};
    width: 100%;
    height: 40px;

    display: flex;
    flex-direction: row;

    text-align: center;
`

export const RowSection = styled.div`
    width: 100%;
    height: 100%;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const Text = styled.span`
    color: ${theme.palette.dark.shade};
    font-weight: 500;
    font-size: 16px;
    line-height: 110%;
`