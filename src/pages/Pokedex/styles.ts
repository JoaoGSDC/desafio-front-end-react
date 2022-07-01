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

export const SectionFilter = styled.section`
  display: flex;
  background-color: #313131;
  height: 184px;
  width: 100%;
`;

export const FieldsFilter = styled.div`
  width: calc(100% - 344px);
  margin: auto;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    margin-top: 0px;
    margin-bottom: 4px;
  }

  div {
    display: flex;

    input {
      width: 100%;
      border: 3px solid #616161;
      color: #313131;
      background-color: #fff;
      border-radius: 5px;
      height: 40px;
      font-size: 100%;
      padding: 0px 8px;
    }

    button {
      height: auto;
      width: 48px;
      color: #fff;
      border-radius: 4px;
      border: none;
      margin-left: 8px;
      transition: 0.2s;
      background-position: center;
      background-repeat: no-repeat;
      background-color: #ee6b2f;
      background-image: url("https://assets.pokemon.com/static2/_ui/img/chrome/forms/input-search-bg.png");

      &:hover {
        background-color: #ce5c27;
      }
    }
  }
`;

export const SectionPokemons = styled(Section)`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 300px;
  max-width: 200px;

  flex-direction: column;
  flex: 1 0 21%;

  padding: 0px 16px;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  figure {
    position: relative;
    background-color: #f2f2f2;
    width: 179px;
    height: 179px;
    border-radius: 8px;
    margin: 0px;

    img {
      width: 100%;
    }
  }

  &:hover {
    animation-name: jump;
    animation-duration: 0.35s;
  }

  @keyframes jump {
    from {
      margin-top: 8px;
    }

    to {
      margin-top: -4px;
    }
  }
`;

export const PokemonInformationCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  margin-left: 40px;
  height: 100%;

  h4 {
    margin: 0px;
    margin-top: 8px;
    color: #919191;
  }
`;

export const PokemonInformationNameAndTypesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 100%;
  justify-content: center;

  h1 {
    margin: 0px;
    margin-bottom: 8px;
    color: #313131;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Tag = styled.div`
  display: flex;
  background-color: #313131;
  height: 20px;
  justify-content: center;
  align-items: center;
  padding: 0px 16px;
  border-radius: 16px;
  margin-right: 8px;

  h5 {
    color: #fff;
  }
`;

export const RemoveButtonContainer = styled.div`
  position: absolute;
  top: 0;
  width: 179px;
  height: 179px;
  display: flex;

  button {
    width: 100%;
    border: none;
    color: transparent;
    background-color: transparent;
    border-radius: 8px;
    transition: 0.2s;

    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
      color: #d1d1d1;
      font-weight: 700;
      font-size: 1.25rem;
      text-shadow: 0px 0px 8px rgb(0 0 0 / 20%);
      cursor: pointer;
    }
  }
`;
