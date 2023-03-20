import styled from 'styled-components';
import {theme} from '~/theme';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 4px;
`

export const RegistrationsContainer = styled.div`
  width: 94%;

  display: flex;
  flex-direction: column;
`

export const PageTitles = styled.h2`
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

export const CardsBody = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const CardsBlock = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  row-gap: 16px;

  justify-content: space-between;
  justify-items: flex-start;
`

export const CardsBirthBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  gap: 16px;
`

export const BirthDayBanner = styled.div`
  height: 100%;
  width: 100%;
  border: none;
  border-radius: 12px;
  background-color: ${theme.palette.primary.base};
  grid-column: 1/3;
`

export const ClassCards = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`
