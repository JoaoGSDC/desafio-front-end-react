import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  height: 90px;
  background-color: #fff;
  box-shadow: inset 0px 0px 8px rgb(0, 0, 0, 0.25);
  padding: 0px 380px;
  position: sticky;
  top: 0px;
  z-index: 1;

  button {
    height: 90px;
    width: 100px;
    border: none;
    background-color: #fff;
    border-bottom: 6px solid #919191;
    border-radius: 0px 0px 6px 6px;

    transition: 0.2s;

    &:hover {
      color: #fff;
      background-color: #919191;
    }
  }
`;
