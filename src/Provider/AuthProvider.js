import { createContext, useContext, useState } from "react";
import { json } from "react-router-dom";

const authContext = createContext();

const useProvideAuth = () => {
  const [username, setUser] = useState(null);

  const singIn = (user, cb) => {
    console.log(user);
    localStorage.setItem("userData", JSON.stringify({ username: user }));
    setUser({ username: user });
    fetch("http://localhost:8000/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("userData", JSON.stringify(data));
        setUser(data);
      });
    // la vamos a almacenar en el local storage
    return user;
  };

  const singOut = (cb) => {
    setUser(null);
    // eliminar la informacion del local storage
  };
  return {
    username,
    singIn,
    singOut,
  };
};

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => useContext(authContext);
