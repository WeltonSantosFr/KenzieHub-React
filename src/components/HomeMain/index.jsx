import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import PlusSignIcon from "../PlusSignIcon";
import { HomeMainStyled } from "./styles";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const HomeMain = ({ techs, setTechs }) => {
  const userId = window.localStorage.getItem("userId");

  useEffect(() => {
    axios
      .get(`https://kenziehub.herokuapp.com/users/${userId}`)
      .then((res) => {
        setTechs(res.data.techs);
      })
      .catch((err) => {
        if (err) {
          toast.error(err.res.data.message, {
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
  }, [userId, setTechs]);

  function openModal() {
    navigate("tech");
  }

  let navigate = useNavigate();

  const [token] = useState(window.localStorage.getItem("userToken"));

  useEffect(() => {
    token === null && navigate("/login");
  }, [token, navigate]);

  return (
    <HomeMainStyled>
      <ToastContainer />
      <Outlet techs={techs} setTechs={setTechs} />
      <div className="main">
        <div className="header--main">
          <h3>Tecnologias</h3>
          <button onClick={openModal}>
            <PlusSignIcon />
          </button>
        </div>
        <div className="main--list">
          <ul>
            {techs?.map((tech, index) => (
              <li key={index}>
                <h3>{tech.title}</h3>
                <p>{tech.status}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </HomeMainStyled>
  );
};

export default HomeMain;
