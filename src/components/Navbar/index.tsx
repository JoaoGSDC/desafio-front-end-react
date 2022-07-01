import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <button type="button" onClick={() => navigate("/")}>
          <span>Página Inicial</span>
        </button>

        <button type="button" onClick={() => navigate("/pokedex")}>
          <span>Pokedex</span>
        </button>
      </Container>
    </>
  );
}

export default Navbar;
