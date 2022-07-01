import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Pokeball from "../../components/Pokeball";
import api from "../../services/api";
import {
  Container,
  TrainerInformationsContainer,
  Section,
  SectionTrainer,
  SectionPokemons,
  SentinelContainer,
} from "./styles";

function Home() {
  const navigate = useNavigate();
  const dispatch: any = useDispatch();

  const [nextPage, setNextPage] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(-1);

  const [pokemons, setPokemons] = useState<any[]>([]);

  useEffect(() => {
    if (currentPage === -1) {
      return;
    }

    const req = async () =>
      getAllPokemons(
        currentPage === 0 ? "pokemon?offset=0&limit=20" : nextPage
      );
    req();
  }, [currentPage]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries: any) => {
      if (entries.some((entry: any) => entry.isIntersecting)) {
        setCurrentPage(
          (currentPageInsideState: number) => currentPageInsideState + 1
        );
      }
    });

    const sentinela: Element = document.querySelector("#sentinela") as Element;
    intersectionObserver.observe(sentinela);

    return () => intersectionObserver.disconnect();
  }, []);

  async function getAllPokemons(params: string) {
    await api.get(params).then(({ data }) => {
      setNextPage(data.next.split("/")[data.next.split("/").length - 1]);
      handleAllPokemonsStructure(data.results).then((allPokemons) =>
        setPokemons((pokemonsState: any) => [...pokemonsState, ...allPokemons])
      );
    });
  }

  async function handleAllPokemonsStructure(pokemonResults: any[]) {
    let pokemons: any[] = [];

    for (let pokemonResult of pokemonResults) {
      const { data } = await axios.get(pokemonResult.url);
      pokemons.push(data);
    }

    return pokemons;
  }

  function handleCatchPokemon(pokemon: any) {
    dispatch({ type: "ADD_POKEMON", pokemon });
    navigate("/pokedex");
  }

  return (
    <>
      <Container>
        <Section>
          <h1>Capturar Pokémon</h1>
        </Section>

        <SectionTrainer>
          <TrainerInformationsContainer>
            <img
              src="https://archives.bulbagarden.net/media/upload/thumb/4/41/Lets_Go_Pikachu_Eevee_Chase.png/79px-Lets_Go_Pikachu_Eevee_Chase.png"
              alt="trainer"
            />

            <div>
              <h1>Chase</h1>
              <h5>
                Treinador de Pokémon: Let's Go, Pikachu! and Let's Go, Eevee!
              </h5>
            </div>
          </TrainerInformationsContainer>
        </SectionTrainer>

        <hr />

        <SectionPokemons>
          <ul>
            {pokemons.map((pokemon) => (
              <li key={pokemon.id}>
                <div>
                  <img src={pokemon.sprites.front_default} alt="pokemon" />
                  <h3>
                    {pokemon.name.charAt(0).toUpperCase() +
                      pokemon.name.slice(1)}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => handleCatchPokemon(pokemon)}
                >
                  Capturar
                </button>
              </li>
            ))}

            <SentinelContainer>
              <Pokeball id="sentinela" />
            </SentinelContainer>
          </ul>
        </SectionPokemons>
      </Container>
    </>
  );
}

export default Home;
