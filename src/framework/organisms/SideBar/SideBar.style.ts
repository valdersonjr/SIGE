import styled from "styled-components";
import {theme} from "~/theme";

export const Container = styled.div`
  position: fixed;
  min-width: 32vh;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${theme.palette.light.tint};
`;

export const SideBarSkeleton = styled.div`
  height: 100vh;
  min-width: 32vh;
`

export const SigeLogo = styled.img`
  width: 95px;
  height: 102px;

  margin-top: 16px;
  margin-bottom: 34px;

  user-select: none;

  border-color: black;
  border-bottom: 2px;
`
export const Footer = styled.div`
  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  width: 100%;
  margin-left: 32px;
`
export const Logout = styled.button`
  margin-bottom: 16px;
  cursor: pointer;
  border: none;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  background-color: ${theme.palette.light.tint};
  color: ${theme.palette.dark.tint};
`
export const Text = styled.span` //arrumar
  padding-top: 13px;
  padding-bottom: 13px;

  font-size: 14px;
  font-weight: 500;
`
