import styled from "styled-components";
import { theme } from "~/theme";

export const Container = styled.select`
    min-width: 79px;
    border: 1px solid ${theme.palette.medium.base};
    border-radius: 4px;

    cursor: pointer;
`