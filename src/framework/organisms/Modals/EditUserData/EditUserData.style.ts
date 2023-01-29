import styled from "styled-components"
import { theme } from "~/theme"

export const Container = styled.form`
    width: 100vw;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.3);

    z-index: 2;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    position: fixed;
    top: 0;
    left: 0;
`

export const Modal = styled.div`
    width: 40%;
    margin-top: 40px;
    padding-bottom: 10px;

    background-color: ${theme.palette.light.tint};

    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 8px;
    border: none;

    position: relative;

    gap: 4px;
`
export const Header = styled.div`
    width: 100%;
    margin-top: -8px;
`

export const InputsContainer = styled.div`
    width: 100%;
    height: auto;
    position: relative;

    padding: 20px;

    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const ButtonsContainer = styled.div`
    width: 100%;
    height: 20%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 4px;

    padding: 8px;
`