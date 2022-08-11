import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContexts";
import { HeaderHomeStyled } from "./styles";

const HeaderHome = () => {
  const { setUser } = useContext(UserContext);
  return (
    <HeaderHomeStyled>
      <h1>Kenzie Hub</h1>

      <Link
        onClick={() => {
          window.localStorage.clear();
          setUser(false);
        }}
        to="login"
      >
        Voltar
      </Link>
    </HeaderHomeStyled>
  );
};

export default HeaderHome;
