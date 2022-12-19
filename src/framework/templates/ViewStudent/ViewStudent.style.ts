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
    width: 94%;
`

export const BackButton = styled.button`
    border-radius: 8px;
    border: none;
    cursor: pointer;
`


export const DropdownContainer = styled.div`
    width: 94%;

    display: flex;
    flex-direction: column;

    gap: 16px;
`