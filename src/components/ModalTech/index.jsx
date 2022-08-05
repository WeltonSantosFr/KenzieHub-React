import React, { useEffect } from "react";
import { motion } from "framer-motion";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import CloseSignIcon from "../CloseSignIcon";
import { useNavigate } from "react-router-dom";
import { ModalStyled } from "./styles";

const ModalTech = ({ techs, setTechs }) => {
  const [token] = useState(window.localStorage.getItem("userToken"));

  const techScheema = yup.object().shape({
    title: yup.string().required("Por favor insira um título"),
    status: yup.string().required("Por favor selecione um status"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(techScheema),
  });

  const onSubmitFunction = (data) => {
    console.log(data);
    createTech(data);
  };

  function createTech(data) {
    axios
      .post(`https://kenziehub.herokuapp.com/users/techs`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res) {
          console.log(techs);
          setTechs([...techs, res.data]);
          toast.success("Tecnologia Adicionada!", {
            className: "success-toast",
            draggable: true,
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            progress: undefined,
          });

          navigate("/home");
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          toast.error(err.response.data.message, {
            className: "error-toast",
            draggable: true,
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            progress: undefined,
          });
        }
      });
  }

  let navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(true);

  useEffect(() => {
    modalOpen === false && navigate("/home");
  }, [modalOpen, navigate]);

  return (
    <motion.div
      initial={{
        x: -100,
        y: 0,
        scale: 1,
        rotate: 0,
      }}
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
      <ModalStyled>
        <div className="modal--header">
          <h3>Cadastrar Tecnologia</h3>
          <CloseSignIcon onClick={() => setModalOpen(false)} />
        </div>
        <div className="form--div">
          <form>
            <label htmlFor="">Nome</label>
            <input type="text" {...register("title")} />
            <p>{errors.title?.message}</p>
            <label htmlFor="">Selecionar status</label>
            <select {...register("status")}>
              <option value="">Selecione</option>
              <option value="iniciante">Iniciante</option>
              <option value="intermediario">Intermediário</option>
              <option value="avancado">Avançado</option>
            </select>
            <p>{errors.status?.message}</p>
            <button onClick={handleSubmit(onSubmitFunction)}>
              Cadastrar Tecnologia
            </button>
          </form>
        </div>
      </ModalStyled>
    </motion.div>
  );
};

export default ModalTech;
