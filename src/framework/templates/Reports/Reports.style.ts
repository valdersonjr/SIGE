import styled from "styled-components";
import {theme} from "@theme";

export const Container = styled.div`
    width: 100%;
    height: 95vh;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    gap: 10px;
    margin-top: 4px;
`;
export const Body = styled.div`
    width: 94%;
    height: 100%;

    display: grid;

    grid-template-columns: 1fr 1fr;

    align-items: flex-start;
    //justify-items: center;
    justify-content: center;

    gap: 20px;
    row-gap: 30px;
    column-gap:30px;
    padding-top: 20px;
    padding-bottom: 20px;
`
export const Block = styled.div`
    width: 100%;
    border-radius: 20px;
    border-left: 1px solid #F0F6FA;
    border-right: 1px solid #F0F6FA;
`
export const BlockTitle = styled.h3`
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 16px;

    background-color: ${theme.palette.medium.tint};

    border-radius: 8px 8px 0px 0px;
    border-bottom: 1px solid #EDEDED;
`
export const BlockBody = styled.div`
    padding: 16px;
    background-color: ${theme.palette.light.tint};

    align-items: center;
    justify-items: center;
    justify-content: center;

    gap: 10px;
`
export const BlockBodyDivisor = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 16px;
    gap: 16px;
`
export const ButtonTitleContainer = styled.span`
    position: relative;
    min-width: 154px;
    right: 0;
`
export const ButtonBodyContainer = styled.span`
    position: relative;
    width: 100%;
    right: 0;
`
