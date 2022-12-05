import styled from "styled-components";

const situation: { [key: string]: string } = {
    'Ativo': '#36D75E',
    'Desativado': '#FF5964',
    'Pendência': '#F18F01',
    'Indisponível': '#949494',
  };

import { theme } from "~/theme";

export const Container = styled.div<{ index:number }>`
    background-color: ${({index})=> index%2 === 0 ? `${theme.palette.light.tint}` : `${theme.palette.medium.base}`};
    width: 100%;
    height: ${({index}) => index === 0 ? "40px" : "54px"};

    display: flex;
    flex-direction: row;

    text-align: center;
`

export const RowSection = styled.div`
    width: 100%;
    height: 100%;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const SituationContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
`

export const SituationIcon = styled.div<{ flag:string }>`
    width: 10px;
    height: 10px;

    border-radius: 100%;

    background: ${({flag}) => situation[flag]};
    box-shadow: 0px 0px 12px ${({flag}) => situation[flag]};
`

export const Text = styled.span`
    color: ${theme.palette.dark.shade};
    font-weight: 500;
    font-size: 16px;
    line-height: 110%;
`