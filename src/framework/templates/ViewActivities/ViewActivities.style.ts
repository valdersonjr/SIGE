import styled from "styled-components";
import { theme } from "~/theme";

export const Container = styled.div`
    width: 94%;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const FindClassContainer = styled.div`
    min-width: 100%;
    min-height: 100%;
    padding: 22px;
    
    background-color: ${theme.palette.light.tint};
    
    display: flex;
    flex-direction: column;
    gap: 22px;

    border-bottom: 1px solid #EDEDED;
    box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
`
export const FilterContainer = styled.div`
  width: 100%;
  height: 75px;

  display: flex;
  flex-direction: row;
  gap: 10px;

  align-items: flex-end;
`
export const ClearButton = styled.div`
  width: 60%;
  height: 48px;
`
export const SearchButton = styled.div`
  width: 50%;
  height: 48px;
`
