import styled from 'styled-components';
import { theme } from "~/theme";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ModalTitle = styled.h1`
    font-size: 24px;
    color: ${theme.palette.alert.base};
    text-align: center;
    margin-bottom: 10px;
`
export const ModalSubtitle = styled.h1`
    font-size: 20px;
    color: ${theme.palette.dark.tint};
    text-align: center;
    max-width: 400px;
    margin-bottom: 10px;
`
export const ModalBottomTitle = styled.h1`
    font-size: 14px;
    color: ${theme.palette.medium.shade};
    text-align: center;
`
