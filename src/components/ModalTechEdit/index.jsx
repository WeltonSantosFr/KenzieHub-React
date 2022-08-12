import React, { useContext, useEffect } from "react";
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

import { TechContext } from "../../contexts/TechContexts";

const ModalTechEdit = ({ techs, setTechs }) => {
  const [token] = useState(window.localStorage.getItem("userToken"));
  const [userId] = useState(window.localStorage.getItem("userId"));
  const { atual } = useContext(TechContext);

  const techScheema = yup.object().shape({
    status: yup.string().required("Por favor selecione um status"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(techScheema),
  });

  const onSubmitEditFunction = (data) => {
    axios
      .put(`https://kenziehub.herokuapp.com/users/techs/${atual}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        axios
          .get(`https://kenziehub.herokuapp.com/users/${userId}`)
          .then((res) => setTechs(res.data.techs));
        navigate("/home");

        toast.success("Tecnologia Editada com sucesso!", {
          className: "success-toast",
          draggable: true,
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          progress: undefined,
        });
      })
      .catch((err) => {
        toast.error("Erro!", {
          className: "error-toast",
          draggable: true,
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          progress: undefined,
        });
      });
  };

  const onSubmitDeleteFunction = () => {
    axios
      .delete(`https://kenziehub.herokuapp.com/users/techs/${atual}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        axios
          .get(`https://kenziehub.herokuapp.com/users/${userId}`)
          .then((res) => setTechs(res.data.techs));
        navigate("/home");

        toast.success("Tecnologia Deletada com sucesso!", {
          className: "success-toast",
          draggable: true,
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          progress: undefined,
        });
      })
      .catch((err) => {
        toast.error("Erro!", {
          className: "error-toast",
          draggable: true,
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          progress: undefined,
        });
      });
  };

  let navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(true);

  useEffect(() => {
    modalOpen === false && navigate("/home");
  }, [modalOpen]);

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
          <h3>Editar Tecnologia</h3>
          <CloseSignIcon onClick={() => setModalOpen(false)} />
        </div>
        <div className="form--div">
          <form>
            <label htmlFor="">Selecionar status</label>
            <select {...register("status")}>
              <option value="">Selecione</option>
              <option value="iniciante">Iniciante</option>
              <option value="intermediario">Intermediário</option>
              <option value="avancado">Avançado</option>
            </select>
            <p>{errors.status?.message}</p>
            <div className="buttons">
              <button onClick={handleSubmit(onSubmitEditFunction)}>
                Editar Tecnologia
              </button>
              <button
                className="delete"
                onClick={(e) => {
                  e.preventDefault();
                  onSubmitDeleteFunction();
                }}
              >
                Excluir Tecnologia
              </button>
            </div>
          </form>
        </div>
      </ModalStyled>
    </motion.div>
  );
};

export default ModalTechEdit;
