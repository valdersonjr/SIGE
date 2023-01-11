import styled from "styled-components";

const situation: { [key: string]: string } = {
    'Ativo': '#36D75E',
    'Inativo': '#FF5964',
    'Pendência': '#F18F01',
    'Indisponível': '#949494',
};

export const CssIcon = styled.div<{ flag:string }>`
    width: 10px;
    height: 10px;

    border-radius: 100%;

    background: ${({flag}) => situation[flag]};
    box-shadow: 0px 0px 12px ${({flag}) => situation[flag]};
`