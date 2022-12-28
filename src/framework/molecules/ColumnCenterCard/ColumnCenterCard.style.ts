import styled, { css } from "styled-components";
import { theme } from "~/theme";

export const color: { [key: string]: string } = {
    'first': `${theme.palette.light.tint}`,
    'second':`${theme.palette.light.tint}`,
    'third': `${theme.palette.light.tint}`,
    'fourth': `${theme.palette.light.tint}`
};

const variant = (type:string) => {
    if(type === "first"){
        return css`
            background: linear-gradient(90deg, #35A7FF 2.23%, #5A78FF 103.23%);
        `
    }
    else if (type === "second") {
        return css`
            background: linear-gradient(90deg, #35A7FF 2.23%, #5A78FF 103.23%);
        `
    }
    else if (type === "third") {
        return css`
            background: linear-gradient(91.74deg, #36D75E 0%, #26AB47 100%);
        `
    }
    else if (type === "fourth") {
        return css`
            background: linear-gradient(90deg, #FF5964 2.23%, #D8000E 103.23%);
        `
    }
    else {
        return css`
            background-color: ${color[type]};
        `
    }
}

export const Container = styled.div<{ type:string }>`
    ${({type}) => variant(type)}

    min-height: 100px;
    min-width: 250px;

    display: flex;
    flex: 1;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    gap: 10px;

    border: 1px solid #EDEDED;
    border-radius: 12px;

    padding: 18px;
`

export const HeaderContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: row;
    
    align-items: center;
    justify-content: center;

    gap: 10px;
`

export const HeaderLabel = styled.span`
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 110%;
`
