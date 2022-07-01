import React from "react";
import { PokeballButton, PokeballContainer } from "./styles";

function Pokeball({ id }: any) {
  return (
    <>
      <PokeballContainer id={id}>
        <PokeballButton />
      </PokeballContainer>
    </>
  );
}

export default Pokeball;
