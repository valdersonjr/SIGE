import styled from "styled-components";
import { theme } from "~/theme";

export const Container = styled.div`
    background-color: ${theme.palette.medium.tint};
    width: 100%;
    height: 40px;

    display: flex;
    flex-direction: row;

    text-align: center;
`

export const RowSection = styled.div<{ last: boolean }>`
    width: 100%;
    height: 100%;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    ${({last}) => !last && (`border-right: 1px solid #B8DFFD;`) }    
`

export const Text = styled.span`
    color: ${theme.palette.dark.shade};
    font-weight: 500;
    font-size: 16px;
    line-height: 110%;
`