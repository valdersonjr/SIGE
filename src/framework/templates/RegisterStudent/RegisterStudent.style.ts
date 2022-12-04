import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
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

export const Body = styled.div`
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
    background-color: silver;
    margin-bottom: 16px;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    padding: 10px;
`