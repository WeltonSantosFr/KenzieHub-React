import React from "react";
import Header from "../../components/Header";
import FormLogin from "../../components/FormLogin";
import { LoginPageStyled } from "./styles";
import { motion } from "framer-motion";

const LoginPage = () => {
  return (
    <motion.div
      initial={{ x: 0, y: -100, scale: 1, rotate: 0 }}
      animate={{
        backgroundColor: "#121214",
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
      }}
      exit={{ x: 0, y: 100, scale: 1, rotate: 0 }}
      transition={{
        duration: 0.5,
        type: "keyframes",
      }}
    >
      <LoginPageStyled>
        <Header />
        <FormLogin />
      </LoginPageStyled>
    </motion.div>
  );
};

export default LoginPage;
