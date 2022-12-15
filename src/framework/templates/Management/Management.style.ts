import styled from "styled-components";
import { theme } from "~/theme";

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    align-items: center;

    margin-top: 4px;
`

export const Body = styled.div`
    width: 94%;
    height: 100%;

    display: grid;

    grid-template-columns: 1fr 1fr;

    align-items: center;
    justify-items: center;
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
    justify-content: center;
    align-items: center;

    padding: 16px;

    background-color: ${theme.palette.medium.tint};

    border-radius: 8px 8px 0px 0px;
    border-bottom: 1px solid #EDEDED;
`

export const BlockBody = styled.div`
    padding: 16px;
    background-color: ${theme.palette.light.tint};

    display: grid;

    grid-template-columns: 1fr 1fr;

    align-items: center;
    justify-items: center;
    justify-content: center;

    gap: 10px;
`

export const BlockFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 16px;
    gap: 16px;
    
    background-color: ${theme.palette.light.tint};


    border-top: 1px solid #F0F6FA;
    box-shadow: 0px -6px 16px rgba(0, 0, 0, 0.04);
    border-radius: 0px 0px 10px 10px;
`