import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin-top: 8px;
  width: 100%;
  //min-width: 884px;
  padding: 10px;
  background-color: #fff;

  box-shadow: 0px -3px 32px rgba(0, 0, 0, 0.08);
  border-radius: 12px;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`
export const Button = styled.button`
  border-radius: 8px;
  border: none;
  cursor: pointer;
`

export const EditDataButton = styled.button`
  all: unset;
  position: absolute;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  right: 0;
  margin-right: 28px;
`
