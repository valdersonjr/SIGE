import styled from 'styled-components';
import { theme } from '~/theme';

export const Container = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 32px;
`

export const RegistrationsContainer = styled.div`
    height: 100%;
    width: 94%;

    display: flex;
    flex-direction: column;
`

export const NewRegistrationsTitle = styled.h2`
    margin-top: 16px;
    margin-left: 16px;
    margin-bottom: 16px;
    width: 100%;
    color: ${theme.palette.primary.base};
    font-size: 23px;
    font-weight: 900;
    line-height: 25px;
`

export const NewRegistrationsContainer = styled.div`
    display: flex;
    flex-direction: row;
    /* background-color: green; */
`
export const ChartContainer = styled.div`
    border: 1px solid ${theme.palette.light.base};
    border-radius: 16px;
    padding: 10px;
`

export const ChartCardsContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
`
export const CardsContainer = styled.div`
    background-color: silver;
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: row;
`