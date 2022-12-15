import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-height: 60px;

    border: 1px solid #F0F6FA;
    border-radius: 7px 7px 0px 0px;
    
    display: flex;
    flex-direction: row;

    padding: 8px 16px;

    justify-content: space-between;
`

export const Header = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
`

export const Body = styled.div`
    width: 100%;
`
export const Icon = styled.button`
    display: inline;
    cursor: pointer;
    border: none;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
`