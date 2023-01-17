import styled from "styled-components";
import {theme} from "~/theme";

export const Container = styled.div`
  width: 79.3vw;
`

export const DropdownBody = styled.div`
  background-color: ${theme.palette.light.base};

  width: 79.3vw;

  padding: 12px 16px;
  border: 1px solid #F0F6FA;
  border-radius: 0 0 7px 7px;

  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 1em;

  //@media(min-width: 1500px) {
  //  grid-template-columns: auto auto auto;
  //}
  //@media(min-width: 1500px) {
  //  grid-template-columns: auto auto auto;
  //}
`
