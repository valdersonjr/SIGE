import styled, { css } from "styled-components";
import { theme } from "~/theme";

interface ITextProps {
    fieldValue?:string;
}

const getFieldColor = (value?:string) => {
    if(value === "Sem Turma Vinculada"){
        return css`
            color: #f34d57;
        `
    }
    else {
        return css`
            color: ${theme.palette.dark.shade};
        `
    }
}

export const Container = styled.div<{ index:number }>`
    background-color: ${({index})=> index%2 === 0 ? `#EDF2F7` : `${theme.palette.light.tint}` };
    width: 100%;
    height: 180px;

    display: flex;
    flex-direction: row;

    text-align: center;
`

export const RowSection = styled.div`
    width: 100%;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Text = styled.span<ITextProps>`
    ${({fieldValue}) => css `
        ${getFieldColor(fieldValue)}
    `}
    
    font-weight: 500;
    font-size: 16px;
    line-height: 110%;
`