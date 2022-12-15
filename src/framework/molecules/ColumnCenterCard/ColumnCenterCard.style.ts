import styled from "styled-components";
import { theme } from "~/theme";

export const Container = styled.div`
    min-height: 100px;
    min-width: 250px;

    background-color: ${theme.palette.light.tint};

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    gap: 10px;

    border: 1px solid #EDEDED;
    border-radius: 12px;
`

export const HeaderContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    
    align-items: center;
    justify-content: center;

    gap: 10px;
`

export const HeaderLabel = styled.span`
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 110%;
    color: ${theme.palette.dark.shade};
`