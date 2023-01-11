import styled from "styled-components";
import { theme } from "~/theme";

export const Container = styled.div`
    width: 260px;
    min-height: 170px;
    padding: 12px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 4px;

    border-radius: 8px;
    background-color: ${theme.palette.light.tint};
`
export const Title = styled.h2`
    color: #B9B9B9;
    font-weight: 500;
    font-size: 20px;
    line-height: 110%;
    
    margin: 8px;
    min-height: 50px;
`
export const Content = styled.span`
    font-weight: 600;
    font-size: 20px;
    line-height: 110%;
    color: ${theme.palette.dark.tint};

    margin: 8px;
`