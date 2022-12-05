import styled from "styled-components";
import { theme } from "~/theme";

export const Container = styled.div`
    width: 100%;
    max-height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 20px;
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
    gap: 20px;
`

export const Button = styled.button`
    border-radius: 8px;
    border: none;
    cursor: pointer;
`

export const DropdownBody = styled.div`
    background-color: ${theme.palette.light.base};

    width: 94%;

    padding: 12px 16px;
    border: 1px solid #F0F6FA;
    border-radius: 0px 0px 7px 7px;
`