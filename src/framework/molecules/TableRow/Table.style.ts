import styled from "styled-components";

import { theme } from "~/theme";


export const Container = styled.div<{ index:number }>`
    background-color: ${({index})=> index%2 === 0 ? `${theme.palette.medium.base}` : `${theme.palette.light.tint}` };
    width: 100%;
    height: 54px;

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

export const SituationContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
`

export const Text = styled.span`
    color: ${theme.palette.dark.shade};
    font-weight: 500;
    font-size: 16px;
    line-height: 110%;
`