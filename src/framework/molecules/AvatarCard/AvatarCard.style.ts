import styled from "styled-components";
import { theme } from "~/theme";

export const Container = styled.div`
    padding: 16px 16px 16px 16px;
`

export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;

    margin-bottom: 12px;
`
export const Text = styled.div<{ isTitle:boolean }>`
    font-size: ${ ({isTitle}) => isTitle ? "14px" : "12px" };
    font-weight: ${ ({isTitle}) => isTitle ? 700 : 500 };
    color: ${ ({isTitle}) => isTitle ? theme.palette.dark.shade : theme.palette.dark.tint };
`