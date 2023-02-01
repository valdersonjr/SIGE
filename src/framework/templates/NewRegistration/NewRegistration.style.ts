import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`
export const Header = styled.div`
  width: 94%;
`
export const Body = styled.div`
  min-height: 80vh;
  width: 94%;
  box-shadow: 0px -3px 32px rgba(0, 0, 0, 0.08);
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
`
export const InputSection = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  padding: 10px;
`
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 14px;
  margin-top: 18px;
`;
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  padding: 10px;
`;
