import styled, { css } from 'styled-components';
import {theme} from "@theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 160px;
  width: 160px;
  border-radius: 34px;
  border: 2px dashed ${theme.palette.medium.shade};
  position: relative;
`;
export const Label = styled.span`
  ${({theme}) => css`
    color: ${theme.palette.medium.shade};
  `};
  font-size: 12px;
  margin-top: 8px;
`;
export const ImagePreview = styled.img`
  height: 160px;
  width: 160px;
  border-radius: 34px;
  object-fit: cover;
`;
