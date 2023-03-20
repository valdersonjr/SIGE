import styled from "styled-components";
import {theme} from "~/theme";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-color: ${theme.palette.light.tint};
`;
export const Main = styled.div`
  background: cyan;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
export const SigeLogo = styled.img`
  width: 95px;
  height: 102px;

  margin-top: 16px;
  margin-bottom: 34px;

  user-select: none;

  border-color: black;
  border-bottom: 2px;
`;
export const Footer = styled.div`
  background: cyan;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;
export const Logout = styled.button`
  margin-bottom: 16px;
  padding: 0 24px;
  
  border: none;

  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  //background-color: ${theme.palette.light.tint};
  //color: ${theme.palette.dark.tint};
`;
export const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: red;
  cursor: pointer;
`;
export const Text = styled.span` // fixme
  padding-top: 13px;
  padding-bottom: 13px;
  font-size: 14px;
  font-weight: 500;
`;
