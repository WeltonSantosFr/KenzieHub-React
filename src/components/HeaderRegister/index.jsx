import React from "react";
import { Link } from "react-router-dom";
import { HeaderRegisterStyled } from "./styles";

const HeaderRegister = () => {
  return (
    <HeaderRegisterStyled>
      <div>
        <h1>Kenzie Hub</h1>

        <Link to="/login">Voltar</Link>
      </div>
    </HeaderRegisterStyled>
  );
};

export default HeaderRegister;
