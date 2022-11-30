import styled from 'styled-components';
import { theme } from '~/theme';

export const Container = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 4px;
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
    max-width: 100%;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    column-gap: 65px;
    row-gap: 16px;
`
export const BirthdaysOfMonth = styled.div`
    border: 2px solid black;
    width: 100%;
    height: 100px;
    width: 2fr;
`

export const ClassText = styled.h3`
    color: ${theme.palette.primary.base};
    font-weight: 900;
    font-size: 23px;
    line-height: 110%;
    margin-bottom: 16px;
`

export const ClassCards = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`