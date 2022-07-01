import styled from "styled-components";

export const Container = styled.div.attrs((props: { open: boolean }) => props)`
  position: fixed;
  top: 0px;
  right: 0px;
  height: 100%;
  width: 50%;
  background-color: #fff;
  padding: 16px;
  display: ${(props: any) => (props.open ? "flex" : "none")};
  flex-direction: column;
  z-index: 2;
  box-shadow: -100px 0px 56px #0000008a;

  border-left: 24px solid #313131;
  border-radius: 8px 0px 0px 0px;
  background: #ffffffe8
    url(https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png);
  backdrop-filter: blur(4px);

  max-height: 100%;
  overflow: auto;

  color: #000;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    margin: auto 8px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  justify-content: center;
  margin: 16px 0px;

  figure {
    height: 300px;
    width: 300px;
    border-radius: 8px;

    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgb(120 120 120 / 37%);
    backdrop-filter: blur(4px);

    img {
      height: 100%;
    }
  }
`;

export const Progress = styled.div.attrs((props: { width: number }) => props)`
  // background: ${(props: any) => (props.width > 100 ? "orange" : "#333")};
  background: #333;
  border-radius: 13px;
  height: 20px;
  width: 300px;
  padding: 3px;

  &:after {
    content: "";
    display: block;
    background: orange;
    width: ${(props: any) => `${props.width}%`};
    height: 100%;
    border-radius: 9px;

    &:after {
      content: "";
      display: block;
      background: orange;
      width: ${(props: any) => `${props.width}%`};
      height: 100%;
      border-radius: 9px;
    }
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  div {
    h5 {
      margin-bottom: 8px;
    }
  }
`;

export const InfosContainer = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;

  h2 {
    margin-top: 4px;
  }

  h3 {
    margin-bottom: 4px;
  }

  h3:last-of-type {
    margin-bottom: 16px;
  }
`;

export const HabilitiesContainer = styled.div`
  h2 {
    text-align: center;
    margin-top: 32px;
  }

  div {
    display: flex;
    justify-content: space-around;
    margin-bottom: 32px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-around;
  padding-bottom: 40px;

  button {
    height: 40px;
    width: 100%;
    margin: 0px;
    border: none;
    background-color: orange;
    color: #313131;
    font-weight: 700;

    &:hover {
      background-color: #e79500;
    }
  }

  button:first-of-type {
    border-radius: 8px 0px 0px 8px;
  }

  button:last-of-type {
    border-radius: 0px 8px 8px 0px;
  }
`;
