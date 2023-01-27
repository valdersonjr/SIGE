import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
`;

export const LeftSideContainer = styled.div`
  width: 30%;
  padding: 4%;
`;

export const RightSide = styled.div`
  background-color: #b8dffd;
  background-position: bottom right;
  background-repeat: no-repeat;
  background-image: url('/backgroundRight.svg'), url('/wave.svg');
  background-size: contain;
  width: 70%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
`;
