import styled from "styled-components";

import { theme } from "~/theme";

export const Container = styled.div<{ index:number }>`
    background-color: ${({index})=> index%2 === 0 ? `${theme.palette.light.tint}` : `${theme.palette.medium.base}`};
    width: 100%;
    height: ${({index}) => index === 0 ? "40px" : "54px"};

    display: flex;
    flex-direction: row;

    text-align: center;
`

export const RowSection = styled.div`
    width: 100%;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Text = styled.span`
    color: ${theme.palette.dark.shade};
    font-weight: 500;
    font-size: 16px;
    line-height: 110%;
`