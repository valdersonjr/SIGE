import styled from "styled-components";
import { theme } from "~/theme";

export const Container = styled.div`
    width: 250px;
    height: 100px;

    border: 1px solid ${theme.palette.light.base};
    border-radius: 16px;
    padding: 10px;

    display: flex;
    flex-direction: column;
    gap: 8px;

    align-items: center;
`
export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    width: 100%;
`

export const HeaderTitle = styled.h2`
    font-weight: 500;
    font-size: 14px;
    line-height: 110%;
    text-align: start;
`

export const Value = styled.div`
    font-size: 32px;
    font-weight: 900;
    color: ${theme.palette.primary.base};
`