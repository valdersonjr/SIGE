import styled, { css } from 'styled-components';
import { theme } from '~/theme';

const getVariant = (type:string) => {
    if(type === 'home'){
        return css`
            background: linear-gradient(90deg, #35A7FF 2.23%, #8FFF5A 103.23%);
        `
    }
    else if (type === 'students') {
        return css`
            background: linear-gradient(90.29deg, #35A7FF 0.94%, #0078D5 99.94%);
        `
    }
    else if (type === 'gestao-escolar') {
        return css`
            background: linear-gradient(90.27deg, #F18F01 0.94%, #D78003 99.93%);
        `
    }
    else if (type === 'users') {
        return css`
            background: linear-gradient(90.27deg, #36D75E 0.94%, #26AB47 99.93%);
        `
    }
    else if (type === 'reports') {
        return css`
          background: linear-gradient(90deg, #35A7FF 2.23%, #8FFF5A 103.23%);
        `
    }
}

export const Container = styled.div<{type: string}>`
    position: relative;
    width: 94%;
    height: 110px;

    ${({ type }) => getVariant(type)}
    border-bottom: 1px solid #FFFFFF;
    box-shadow: 0px 8px 48px rgba(0, 0, 0, 0.16);
    border-radius: 12px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 32px;
    gap: 10px;
`
export const BannerIconContainer = styled.div`
    position: relative;
    overflow: hidden;
    align-self: flex-end;
    margin-bottom: -4.2px;
    min-width: 146px;
`
export const MainContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

export const TextContainer = styled.div`
    min-width: 662px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-left: 10px;
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

export const ButtonContainer = styled.span`
    position: relative;
    min-width: 154px;
    margin-right: 32px;
    right: 0;
`
