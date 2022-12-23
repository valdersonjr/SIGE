import styled from "styled-components";
import { theme } from "~/theme";

export const Container = styled.div`
    width: 79.3vw;
    overflow: auto;
`

export const DropdownBody = styled.div`
    background-color: ${theme.palette.light.base};

    width: 79.3vw;

    padding: 12px 16px;
    border: 1px solid #F0F6FA;
    border-radius: 0px 0px 7px 7px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;

    overflow: auto;
`