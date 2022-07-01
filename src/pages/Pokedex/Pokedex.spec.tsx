/* eslint-disable testing-library/prefer-screen-queries */
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import Pokedex from ".";
import { pokemon } from "../../test/mock";

describe("Pokedex Component", () => {
  const initialState = {
    pokeStore: pokemon,
  };

  const mockStore = configureStore();
  const store = mockStore(initialState);

  function renderWithRedux(component: JSX.Element) {
    return {
      ...render(<Provider store={store}>{component}</Provider>),
    };
  }

  it("should render pokedex list", async () => {
    const { getByText } = renderWithRedux(<Pokedex />);

    await waitFor(() => {
      expect(getByText("Charizard")).toBeInTheDocument();
    });
  });

  it("should filter pokedex list by name", async () => {
    const { getByTestId, getAllByText, queryByText } = renderWithRedux(
      <Pokedex />
    );

    const inputSearch = getByTestId("input-search");
    userEvent.type(inputSearch, "Ch");

    await waitFor(() => {
      expect(getAllByText("Charizard")).toBeInTheDocument();
    });

    userEvent.type(inputSearch, "B");

    await waitFor(() => {
      expect(queryByText("Charizard")).not.toBeInTheDocument();
    });
  });

  it("should filter pokedex list by code", async () => {
    const { getByTestId, getAllByText, queryByText } = renderWithRedux(
      <Pokedex />
    );

    const inputSearch = getByTestId("input-search");
    userEvent.type(inputSearch, "0");

    await waitFor(() => {
      expect(getAllByText("Charizard")).toBeInTheDocument();
    });

    userEvent.type(inputSearch, "6");

    await waitFor(() => {
      expect(queryByText("Charizard")).not.toBeInTheDocument();
    });
  });
});
