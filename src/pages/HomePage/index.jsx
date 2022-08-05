import React from "react";

import HeaderHome from "../../components/HeaderHome";
import HomeMain from "../../components/HomeMain";
import UserHeader from "../../components/UserHeader";
import { motion } from "framer-motion";

const HomePage = ({ techs, setTechs }) => {
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
      <HeaderHome />
      <UserHeader />
      <HomeMain techs={techs} setTechs={setTechs} />
    </motion.div>
  );
};

export default HomePage;
