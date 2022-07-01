import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PokemonDetails from "./components/PokemonDetails";

import {
  Container,
  FieldsFilter,
  Section,
  SectionFilter,
  SectionPokemons,
  Card,
  PokemonInformationCardContainer,
  PokemonInformationNameAndTypesContainer,
  TagsContainer,
  Tag,
  RemoveButtonContainer,
} from "./styles";

function Pokedex() {
  const navigate = useNavigate();

  const [selectedPokemon, setSelectedPokemon] = useState<any>({});
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [pokemonsInit, setPokemonsInit] = useState<any[]>([]);

  const [open, setOpen] = useState<boolean>(false);

  const pokemonsInTheStore: any[] = useSelector(
    (state: any) => state.pokeStore
  );

  useEffect(() => {
    setPokemons(pokemonsInTheStore);
    setPokemonsInit(pokemonsInTheStore);
  }, [pokemonsInTheStore]);

  function handleSearchPokemon(e: any) {
    const search: string | number = isNaN(Number(e.target.value))
      ? e.target.value
      : Number(e.target.value);

    if (["", 0].includes(search)) {
      setPokemons(pokemonsInit);
      return;
    }

    const pokeFilter =
      typeof search === "string"
        ? handleSearchPokemonByName(String(search))
        : handleSearchPokemonByCode(Number(search));

    setPokemons(pokeFilter);
  }

  function handleSearchPokemonByName(search: string) {
    return pokemonsInit.filter((pokemon) => pokemon.name.startsWith(search));
  }

  function handleSearchPokemonByCode(search: number) {
    return pokemonsInit.filter((pokemon) => pokemon.id === search);
  }

  return (
    <>
      <Container>
        <Section>
          <h1>Pokédex</h1>
        </Section>

        <SectionFilter>
          <FieldsFilter>
            <h2>Nome ou número</h2>

            <div>
              <input
                data-testid="input-search"
                type="text"
                onChange={handleSearchPokemon}
              />
              <button type="button" disabled />
            </div>
          </FieldsFilter>
        </SectionFilter>

        <hr />

        <SectionPokemons>
          {pokemons.length ? (
            pokemons.map((pokemon) => {
              return (
                <>
                  <Card key={pokemon.id}>
                    <figure>
                      <img src={pokemon.sprites.front_default} alt="pokemon" />

                      <RemoveButtonContainer>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedPokemon(pokemon);
                            setOpen(true);
                          }}
                        >
                          Ver mais
                        </button>
                      </RemoveButtonContainer>
                    </figure>

                    <PokemonInformationCardContainer>
                      <h4>Nº{String(pokemon.id).padStart(3, "0")}</h4>

                      <PokemonInformationNameAndTypesContainer>
                        <h1>
                          {pokemon.name?.charAt(0).toUpperCase() +
                            pokemon.name.slice(1)}
                        </h1>

                        <TagsContainer>
                          {pokemon.types.map(({ type }: any) => (
                            <Tag
                              key={type.name}
                              onClick={() => navigate(`/types/${type.name}`)}
                            >
                              <h5>{type.name}</h5>
                            </Tag>
                          ))}
                        </TagsContainer>
                      </PokemonInformationNameAndTypesContainer>
                    </PokemonInformationCardContainer>
                  </Card>
                </>
              );
            })
          ) : (
            <>
              <h1>Bora caçar Pokémon!</h1>
            </>
          )}
        </SectionPokemons>
      </Container>

      {selectedPokemon ? (
        <PokemonDetails
          open={open}
          pokemon={selectedPokemon}
          onClose={() => setOpen(false)}
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default Pokedex;
