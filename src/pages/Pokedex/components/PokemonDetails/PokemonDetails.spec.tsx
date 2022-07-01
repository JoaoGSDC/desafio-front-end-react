/* eslint-disable testing-library/prefer-screen-queries */
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import PokemonDetails from ".";
import { pokemon } from "../../../../test/mock";

describe("Pokedex Component", () => {
  const initialState = {
    pokeStore: pokemon,
  };

  const mockStore = configureStore();

  function renderWithRedux(component: JSX.Element) {
    return {
      ...render(
        <Provider store={mockStore(initialState)}>{component}</Provider>
      ),
    };
  }

  it("should pokemon details modal", async () => {
    const { getByText } = renderWithRedux(
      <PokemonDetails open={true} pokemon={pokemon[0]} onClose={() => {}} />
    );

    await waitFor(() => {
      expect(getByText("Charizard")).toBeInTheDocument();
    });
  });
});
