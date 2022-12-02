import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Header = styled.div`
    margin-top: 8px;
    width: 94%;
    padding: 10px;
    background-color: #fff;

    box-shadow: 0px -3px 32px rgba(0, 0, 0, 0.08);
    border-radius: 12px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
`

export const Button = styled.button`
    border-radius: 8px;
    border: none;
    cursor: pointer;
`