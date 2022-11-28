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
    background-color: silver;

    display: flex;
    flex-direction: column;
`

export const NewRegistrations = styled.div`
    background-color: yellow;
`
export const NewRegistrationsTitle = styled.h2`
    width: 100%;
    color: ${theme.palette.primary.base};
    font-size: 23px;
    font-weight: 900;
    line-height: 25px;
`