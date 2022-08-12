import React, { useContext, useEffect } from "react";
import ArrowSelect from "../SelectArrow";
import { MainRegister } from "./styles";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContexts";

const FormRegister = () => {
  const { handleRegister, user } = useContext(UserContext);
  let navigate = useNavigate();

  const scheema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Formato inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        `Senha deve conter pelo menos: 8 caracteres, 
    1 Letra Maiúscula, 
    1 Número, 
    1 Símbolo`
      ),
    confirmPassword: yup
      .string()
      .required("Confirmação de senha obrigarória")
      .oneOf([yup.ref("password")], "Senhas devem coincidir"),
    bio: yup.string().required("Bio obrigatória"),
    contact: yup.string().required("Contato obrigatório"),
    course_module: yup.string().required("Obrigatório selecionar um módulo"),
  });

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(scheema),
  });

  const onSubmitFunction = (data) => {
    handleRegister(data);
  };

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user]);

  return (
    <MainRegister>
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
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
        {<p>{errors.name?.message}</p>}
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
        <label htmlFor="confirmPassword">Confimar senha</label>
        <input
          type="password"
          placeholder="Digite aqui sua senha"
          {...register("confirmPassword")}
        />
        {<p>{errors.confirmPassword?.message}</p>}
        <label htmlFor="bio">Bio</label>
        <input type="text" placeholder="Fale sobre você" {...register("bio")} />
        {<p>{errors.bio?.message}</p>}
        <label htmlFor="contact">Contato</label>
        <input
          type="text"
          placeholder="Opção de contato"
          {...register("contact")}
        />
        {<p>{errors.contact?.message}</p>}
        <label htmlFor="course_module">Selecionar módulo</label>
        <div>
          <select
            {...register("course_module")}
            onChange={(e) =>
              setValue("course_module", e.target.value, {
                shouldValidate: true,
              })
            }
          >
            <option value="">Selecione um Módulo</option>
            <option value="Primeiro Módulo (Introdução ao Front-end)">
              Primeiro Módulo
            </option>
            <option value="Segundo Módulo (Front-end Intermediario)">
              Segundo Módulo
            </option>
            <option value="Terceiro Módulo (Front-end Avançado)">
              Terceiro Módulo
            </option>
            <option value="Quarto Módulo (Introdução ao Back-end)">
              Quarto Módulo
            </option>
            <option value="Quinto Módulo (Back-end Intermediario)">
              Quinto Módulo
            </option>
            <option value="Sexto Módulo (Back-end Avançado)">
              Sexto Módulo
            </option>
          </select>
          <ArrowSelect />
        </div>
        {<p>{errors.course_module?.message}</p>}
        <button type="submit" onClick={() => {}}>
          Cadastrar
        </button>
      </form>
    </MainRegister>
  );
};

export default FormRegister;
