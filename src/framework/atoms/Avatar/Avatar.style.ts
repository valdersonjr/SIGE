import styled from "styled-components";
import { theme } from "~/theme";

export const Avatar = styled.img`
    width: 50px;
    height: 50px;

    background-size: cover;
    background-position: top center;

    border: 1px solid ${theme.palette.primary.base};
    border-radius: 50%;
`