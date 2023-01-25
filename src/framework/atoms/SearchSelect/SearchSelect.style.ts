import styled from "styled-components";
import Select from 'react-select-search';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const Label = styled.label`
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  color: #425466;
`
export const SelectSearch = styled(Select)`
  input {
    height: 6vh;
    width: 100%;
    font-size: 14px;
    background-color: #F7F7F7;
    padding: 4px 12px;
    border: none;
    border-radius: 6px;
    box-shadow: none !important;
    outline: none;

    &:hover {
      border: none !important;
      cursor: pointer;
    }
  }


`;
