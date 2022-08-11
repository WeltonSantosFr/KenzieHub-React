import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { createContext } from "react";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  function handleLogin(data) {
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
          console.log(res);

          window.localStorage.clear();
          window.localStorage.setItem("userToken", res.data.token);
          window.localStorage.setItem("userId", res.data.user.id);
          setUser({
            name: res.data.user.name,
            course_module: res.data.user.course_module,
          });
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

  function handleRegister(data) {
    axios
      .post("https://kenziehub.herokuapp.com/users", data)
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

          setUser(true);
        }
      })
      .catch((err) => {
        if (err) {
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

  return (
    <UserContext.Provider
      value={{ handleLogin, handleRegister, user, setUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
