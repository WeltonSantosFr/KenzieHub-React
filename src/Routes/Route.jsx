import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ModalTech from "../components/ModalTech";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const RouteMain = () => {
  const [techs, setTechs] = useState([]);
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route
            path="home"
            element={<HomePage techs={techs} setTechs={setTechs} />}
          >
            <Route
              techs={techs}
              setTechs={setTechs}
              path="tech"
              element={<ModalTech techs={techs} setTechs={setTechs} />}
            />
          </Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<Navigate replace to={"/"} />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default RouteMain;
