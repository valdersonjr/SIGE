import styled from "styled-components";
import { theme } from "~/theme";

export const Container = styled.div`
    overflow: auto;
    width: 94%;
    max-height: 95%;
    margin-bottom: 10px;

    border: 1px solid ${theme.palette.light.base};
    filter: drop-shadow(0px 6px 20px rgba(0, 0, 0, 0.08));
    border-radius: 12px;
`