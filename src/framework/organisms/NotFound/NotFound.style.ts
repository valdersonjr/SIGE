import styled from "styled-components";
import { theme } from "~/theme";

export const Container = styled.div`
  width: 100%;
  height: 40vh;

  display: flex;
  justify-content: center;
  align-items: center;
`
export const Description = styled.h1`
  font-size: 20px;
  color: ${theme.palette.medium.shade};
`;
