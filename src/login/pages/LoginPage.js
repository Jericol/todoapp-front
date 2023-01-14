import React, { useState } from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { useAuth } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  background: #00cba9;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function LoginPage() {
  const [isOnLogin, setIsOnLogin] = useState(true);

  const { singIn } = useAuth();
  const navigate = useNavigate();
  const changeForm = () => {
    setIsOnLogin(!isOnLogin);
  };

  const onLogin = (user) => {
    console.log("ksadjhf");
    singIn(user)
      .then((response) => response.json())
      .then((data) => {
        if (!data.message) {
          localStorage.setItem("userData", JSON.stringify(data));
        }
      });
  };

  const onRegister = (data) => {
    console.log(data);
  };

  return (
    <Container>
      {isOnLogin ? (
        <LoginForm onLogin={onLogin} changeForm={changeForm} />
      ) : (
        <RegisterForm onRegister={onRegister} changeForm={changeForm} />
      )}
    </Container>
  );
}

export default LoginPage;
