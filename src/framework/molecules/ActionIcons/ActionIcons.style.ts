import styled, { css } from "styled-components";

const iconStyle = (flag: string) => {
    if(flag === "trash"){
        return css`
            background: #F7979D;
            padding: 2px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 4px;

            :hover {
                padding: 3px;
            }

            :active {
                box-shadow:none;
            }
        `
    }
    else if(flag === "eye"){
        return css`
            background: #B8DFFD;
            padding: 2px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 4px;

            :hover {
                padding: 3px;
            }
            
            :active {
                box-shadow:none;
            }
        `
    }
}

export const Container = styled.div`
    width: 65%;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

export const Button = styled.button<{ flag: string }>`
    all: unset;
    cursor: pointer;
    border: none;
    width: 30px;
    height: 30px;

    ${({ flag }) => iconStyle(flag)}
`