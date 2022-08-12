import { createContext, useState } from "react";
import React from "react";

export const TechContext = createContext({});

const TechProvider = ({ children }) => {
  const [atual, setAtual] = useState(null);
  return (
    <TechContext.Provider value={{ atual, setAtual }}>
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
