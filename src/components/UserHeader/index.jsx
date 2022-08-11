import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContexts";
import { UserHeaderStyled } from "./styles";

const UserHeader = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <UserHeaderStyled>
      <h2>Olá, {user.name}</h2>

      <p>{user.course_module}</p>
    </UserHeaderStyled>
  );
};

export default UserHeader;
