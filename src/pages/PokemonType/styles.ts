import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background: #fff
    url("https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png");
  width: calc(100% - 224px);
  margin-left: 112px;

  hr {
    border: 32px solid #424242;
    margin: 0px;
  }

  h1 {
    font-size: 2rem;
  }
`;

export const Section = styled.section`
  width: calc(100% - 344px);
  margin: auto;
  background-color: #fff;
  padding: 16px;

  h1 {
    color: #919191;
  }
`;

export const SectionTrainer = styled.section`
  display: flex;
  background-color: #313131;
  height: 184px;
  width: 100%;
`;

export const TrainerInformationsContainer = styled.div`
  width: calc(100% - 344px);
  margin: auto;
  height: 100%;

  display: flex;
  justify-content: center;

  h1 {
    font-size: 2rem;
    margin-top: 0px;
    margin-bottom: 4px;
  }

  h5 {
    margin: 0px;
    color: #979797;
  }

  img {
    margin: 8px 0px;
    margin-right: 16px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const SectionPokemons = styled(Section)`
  display: flex;
  flex-wrap: wrap;

  ul {
    width: 100%;
    list-style-type: none;
    margin-right: 56px;
    margin-top: 0px;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;

      border: 1px solid #f5f5f5;
      border-radius: 8px;
      margin: 8px 0px;
      padding: 0px 8px;

      background: rgba(255, 255, 255, 0.25);
      box-shadow: 0 4px 16px 0 rgb(31 38 135 / 24%);
      backdrop-filter: blur(4px);
      border: 1px solid rgba(255, 255, 255, 0.18);

      div {
        display: flex;
        align-items: center;

        img {
          margin-right: 16px;
        }
      }

      button {
        width: 152px;
        height: 48px;
        border-radius: 48px;
        border: none;
        background-color: #d53027;
        color: #fff;
        font-weight: 700;
        font-size: 0.875rem;
        transition: 0.2s;

        &:hover {
          background-color: #bd2b23;
        }
      }

      h3 {
        color: #2f2f2f;
      }
    }
  }
`;

export const SentinelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
