import { Reducer } from "redux";

const INITIAL_STATE = {
  pokeStore: [],
};

export const reducer: Reducer<any> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_POKEMON":
      return { ...state, pokeStore: [...state.pokeStore, action.pokemon] };

    case "REMOVE_POKEMON":
      return {
        ...state,
        pokeStore: state.pokeStore.filter(
          (item: any, index: number) => item.id !== action.pokemon
        ),
      };

    default:
      return state;
  }
};
