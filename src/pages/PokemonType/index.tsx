import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import {
  Container,
  TrainerInformationsContainer,
  Section,
  SectionTrainer,
  SectionPokemons,
} from "./styles";

function PokemonType() {
  const { name } = useParams();
  const navigate = useNavigate();
  const dispatch: any = useDispatch();

  const [type, setType] = useState<any>({});
  const [pokemons, setPokemons] = useState<any[]>([]);

  useEffect(() => {
    const req = async () => getAllPokemons(String(name));
    req();
  }, []);

  async function getAllPokemons(params: string) {
    await api.get(`type/${params}`).then(({ data }) => {
      setType(data);

      handleAllPokemonsStructure(data).then((allPokemons) =>
        setPokemons((pokemonsState: any) => [...pokemonsState, ...allPokemons])
      );
    });
  }

  async function handleAllPokemonsStructure(pokemonResults: any) {
    let pokemons: any[] = [];

    for (let pokemonResult of pokemonResults.pokemon) {
      const { data } = await axios.get(pokemonResult.pokemon.url);
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
          <h1>Tipo {type.name}</h1>
        </Section>

        <SectionTrainer>
          <TrainerInformationsContainer>
            <img
              src="https://archives.bulbagarden.net/media/upload/thumb/4/41/Lets_Go_Pikachu_Eevee_Chase.png/79px-Lets_Go_Pikachu_Eevee_Chase.png"
              alt="trainer"
            />

            <div>
              <h1>Chase</h1>
              <h5>Vamos capturar pokémons do tipo {type.name}!</h5>
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
          </ul>
        </SectionPokemons>
      </Container>
    </>
  );
}

export default PokemonType;
