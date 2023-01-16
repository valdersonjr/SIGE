import styled from 'styled-components';

export const Form = styled.form`
  width: 94%;
  padding: 16px;
  border-bottom: 1px solid #EDEDED;
  box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.05);
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const InputContainer = styled.div`
  width: 100%;
  min-width: 884px;

  display: flex;
  flex-direction: row;
  gap: 10px;

  align-items: flex-end;

  @media(max-width: 1200px) {
    flex-wrap: wrap;
  }
`

export const ClearButton = styled.div`
  width: 60%;
  height: 48px;
`
export const SearchButton = styled.div`
  width: 50%;
  height: 48px;
`
