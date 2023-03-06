import styled from "styled-components";
import { theme } from "~/theme";

import { XMarkIcon } from "~/framework/atoms/Icons";

export const Container = styled.div`
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
    min-width: 70vw;
    min-height: 60vh;

    background-color: ${theme.palette.light.tint};

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    border-radius: 8px;
    border: none;

    position: relative;

    gap: 4px;
`

export const ModalHeader = styled.div`
    padding: 30px 0px 30px 50px;

    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 10px;
`

export const ModalTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 6px;
`
export const LoadingContainer = styled.div`
    width: 100%;
    min-width: 884px;
    max-height: 60vh;
    margin-bottom: 10px;
`

export const ModalFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    padding: 26px 0px;
`
export const CloseIcon = styled(XMarkIcon)`
    width: 20px;
    margin: 20px 22px;
    position: absolute;
    right: 0;

    cursor: pointer;
`