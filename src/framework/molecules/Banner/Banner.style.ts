import styled from 'styled-components';
import { theme } from '~/theme';

export const Container = styled.div`
    background-color: blue;
    width: 94%;
    min-height: 130px;

    background: linear-gradient(90deg, #35A7FF 2.23%, #8FFF5A 103.23%);
    border-bottom: 1px solid #FFFFFF;
    box-shadow: 0px 8px 48px rgba(0, 0, 0, 0.16);
    border-radius: 12px;

    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 32px;
`
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`
export const Title = styled.h2`
    font-weight: 900;
    font-size: 32px;
    line-height: 110%;
    color: ${theme.palette.medium.tint};
`
export const Text = styled.span`
    font-weight: 500;
    font-size: 18px;
    line-height: 110%;
    color: ${theme.palette.medium.tint};
`