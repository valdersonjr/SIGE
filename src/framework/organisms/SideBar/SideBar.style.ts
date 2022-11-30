import styled from "styled-components";
import { theme } from "~/theme";

export const Container = styled.div`
    position: relative;
    min-width: 32vh;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SigeLogo = styled.img`
    width: 64px;
    height: 72px;

    margin-top: 16px;
    margin-bottom: 34px;

    user-select: none;

    border-color: black;
    border-bottom: 2px;
`
export const Footer = styled.div`
    position: absolute;
    bottom: 0;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`
export const Logout = styled.button`
    margin-bottom: 16px;
    cursor: pointer;
    border: none;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;

    background-color: ${theme.palette.light.tint};
    color: ${theme.palette.dark.tint};
`
export const Text = styled.span` //arrumar
    padding-top: 13px;
    padding-bottom: 13px;

    font-size: 14px;
    font-weight: 500;
`