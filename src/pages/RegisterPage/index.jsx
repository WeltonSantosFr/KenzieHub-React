import React from "react";
import FormRegister from "../../components/FormRegister";
import HeaderRegister from "../../components/HeaderRegister";
import { RegisterPageStyled } from "./styles";
import { motion } from "framer-motion";

const RegisterPage = () => {
  return (
    <motion.div
      initial={{
        x: 0,
        y: -100,
        scale: 1,
        rotate: 0,
        backgroundColor: "#121214",
      }}
      animate={{
        backgroundColor: "#121214",
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
      }}
      exit={{ x: 0, y: 100, scale: 1, rotate: 0, backgroundColor: "#121214" }}
      transition={{
        duration: 0.5,
        type: "keyframes",
      }}
    >
      <RegisterPageStyled>
        <HeaderRegister />
        <FormRegister />
      </RegisterPageStyled>
    </motion.div>
  );
};

export default RegisterPage;
