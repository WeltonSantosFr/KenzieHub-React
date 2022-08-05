import React from "react";
import { MainLogin } from "./styles";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  let navigate = useNavigate();

  const scheema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Formato inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(scheema),
  });

  const onSubmitFunction = (data) => {
    handleRegister(data);
  };

  function handleRegister(data) {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((res) => {
        if (res) {
          toast.success("Sucesso", {
            className: "success-toast",
            draggable: true,
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            progress: undefined,
          });

          window.localStorage.clear();
          window.localStorage.setItem("userToken", res.data.token);
          window.localStorage.setItem("userId", res.data.user.id);

          navigate("/home");
        }
      })
      .catch((err) => {
        if (err) {
          toast.error(err.response.data.message, {
            className: "success-toast",
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

  return (
    <MainLogin>
      <>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h3>Login</h3>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        {<p>{errors.email?.message}</p>}
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />
        {<p>{errors.password?.message}</p>}
        <button>Enviar</button>
        <p>Ainda não possui uma conta?</p>
        <Link to="/register">Cadastre-se</Link>
      </form>
    </MainLogin>
  );
};

export default FormLogin;
