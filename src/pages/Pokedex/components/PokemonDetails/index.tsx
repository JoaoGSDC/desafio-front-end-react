import React from "react";
import { useDispatch } from "react-redux";
import { Tag, TagsContainer } from "../../styles";
import {
  Container,
  Footer,
  HabilitiesContainer,
  ImageContainer,
  InfosContainer,
  Progress,
  StatsContainer,
  TitleContainer,
} from "./styles";

function PokemonDetails({ open, pokemon, onClose }: any) {
  const dispatch = useDispatch();

  function handleRemovePokemon(pokemonId: number) {
    dispatch({ type: "REMOVE_POKEMON", pokemon: pokemonId });
    onClose(true);
  }

  return (
    <>
      {pokemon != null || pokemon !== "undefined" ? (
        <>
          <Container open={open}>
            <TitleContainer>
              <h1>
                {pokemon.name?.charAt(0).toUpperCase() + pokemon.name?.slice(1)}
              </h1>

              <h1>Nº{String(pokemon.id).padStart(3, "0")}</h1>
            </TitleContainer>

            <ImageContainer>
              <figure>
                <img src={pokemon.sprites?.front_default} alt="pokemon" />
              </figure>
            </ImageContainer>

            <InfosContainer>
              <div>
                <h3>Altura</h3>
                <h2>{pokemon.height / 100} m</h2>
              </div>

              <div>
                <h3>Peso</h3>
                <h2>{pokemon.weight / 10} Kg</h2>
              </div>

              <div>
                <h3>Tipos</h3>

                <TagsContainer>
                  {pokemon.types?.map(({ type }: any) => (
                    <Tag key={type.id}>
                      <h5>{type.name}</h5>
                    </Tag>
                  ))}
                </TagsContainer>
              </div>
            </InfosContainer>

            <StatsContainer>
              {pokemon.stats?.map(({ base_stat, stat }: any) => {
                return (
                  <>
                    <div key={base_stat}>
                      <h5>
                        {stat.name?.toUpperCase().replace("-", " ")} |{" "}
                        {base_stat}
                      </h5>
                      <Progress width={base_stat} />
                    </div>
                  </>
                );
              })}
            </StatsContainer>

            <HabilitiesContainer>
              <h2>Habilidades</h2>

              <div>
                {pokemon.abilities?.map(({ ability }: any) => {
                  return (
                    <>
                      <h4 key={ability.id}>{ability.name}</h4>
                    </>
                  );
                })}
              </div>
            </HabilitiesContainer>

            <Footer>
              <button type="button" onClick={() => onClose(true)}>
                Cancelar
              </button>
              <button
                type="button"
                onClick={() => handleRemovePokemon(pokemon.id)}
              >
                Remover
              </button>
              <button type="button" onClick={() => {}}>
                Salvar
              </button>
            </Footer>
          </Container>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default PokemonDetails;
