import styled from "styled-components";

export const PokeballContainer = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  background: #fff;
  border: 8px solid #000;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: inset -10px 10px 0 10px #ccc;
  animation: shake infinite cubic-bezier(0.36, 0.07, 0.19, 0.97) 3;

  &::before,
  &::after {
    content: "";
    position: absolute;
  }

  &::before {
    background: red;
    width: 100%;
    height: 50%;
  }

  &::after {
    top: calc(50% - 10px);
    width: 100%;
    height: 20px;
    background: #000;
  }

  @keyframes shake {
    0% {
      transform: translate(0, 0) rotate(0);
    }
    20% {
      transform: translate(-10px, 0) rotate(-20deg);
    }
    30% {
      transform: translate(10px, 0) rotate(20deg);
    }
    50% {
      transform: translate(-10px, 0) rotate(-10deg);
    }
    60% {
      transform: translate(10px, 0) rotate(10deg);
    }
    100% {
      transform: translate(0, 0) rotate(0);
    }
  }
`;

export const PokeballButton = styled.div`
  position: absolute;
  top: calc(50% - 8px);
  left: calc(50% - 9px);
  width: 8px;
  height: 8px;
  background: #7f8c8d;
  border: 4px solid #fff;
  border-radius: 50%;
  z-index: 10;
  box-shadow: 0 0 0 10px black;
  animation: blink 0.5s alternate 7;

  @keyframes blink {
    from {
      background: #eee;
    }

    to {
      background: #e74c3c;
    }
  }
`;
