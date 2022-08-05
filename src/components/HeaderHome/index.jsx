import React from "react";
import { Link } from "react-router-dom";
import { HeaderHomeStyled } from "./styles";

const HeaderHome = () => {
  return (
    <HeaderHomeStyled>
      <h1>Kenzie Hub</h1>

      <Link to="login">Voltar</Link>
    </HeaderHomeStyled>
  );
};

export default HeaderHome;
