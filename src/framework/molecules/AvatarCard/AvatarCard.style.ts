import styled from "styled-components";
import {theme} from "~/theme";

export const Container = styled.div`
  padding: 16px 16px 16px 16px;

  border: 1px solid ${theme.palette.light.tint};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  width: 100%;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  margin-bottom: 12px;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Text = styled.div<{ isTitle: boolean }>`
  font-size: ${({isTitle}) => isTitle ? "14px" : "12px"};
  font-weight: ${({isTitle}) => isTitle ? 700 : 500};
  color: ${({isTitle}) => isTitle ? theme.palette.dark.shade : theme.palette.dark.tint};
`
