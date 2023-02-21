import styled from "styled-components";
import { theme } from "~/theme";

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`
export const Header = styled.div`
    width: 94%;
`
export const Body = styled.div`
    max-height: 95vh;
    width: 94%;
    box-shadow: 0px -3px 32px rgba(0, 0, 0, 0.08);
    border-radius: 12px;

    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
`
export const ImageInputContainer = styled.div`
    width: 100%;
    margin-bottom: 16px;
`
export const InputSection = styled.div`
    display: flex;
    flex-direction: column;

    gap: 8px;
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    padding: 10px;
`
export const MedicalInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 0.8vw;
    font-weight: 600; 
    color: ${theme.palette.dark.tint};
    width: 100%;
    gap: 8px;
`
export const MedicalInfoInput = styled.textarea`
    ${theme.components.input}
    outline: none;
    resize: none;
    max-height: 95vh;
`
