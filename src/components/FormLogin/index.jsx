import React, { useContext, useEffect } from "react";
import { MainLogin } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer } from "react-toastify";
import { UserContext } from "../../contexts/UserContexts";

const FormLogin = () => {
  let navigate = useNavigate();
  const { handleLogin, user } = useContext(UserContext);

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
    handleLogin(data);
  };

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user]);

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
