import React from "react";
import TodoButton from "../../atoms/Buton";
import { useForm } from "react-hook-form";
import { Input, InputContainer, ErrorMessage } from "../../atoms/input";
import { FormsContainer, Form } from "../../atoms/Form.styled";
function LoginForm({ onLogin, changeForm }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <>
      <FormsContainer>
        <h2>Bienvenido nuevamente</h2>
        <Form className="login" onSubmit={handleSubmit(onLogin)}>
          <InputContainer>
            <i className="fa-solid fa-envelope"></i>
            <Input
              placeholder="email"
              {...register("email", { required: true })}
            />
          </InputContainer>
          {errors.email && (
            <ErrorMessage>El correo es obligatorio</ErrorMessage>
          )}
          <InputContainer>
            <i className="fa-solid fa-lock"></i>
            <Input
              type="password"
              placeholder="Contraseña"
              {...register("password", { required: true })}
            />
          </InputContainer>
          {errors.password && (
            <ErrorMessage>La contraseña es obligatoria</ErrorMessage>
          )}
          <p>
            ¿No tienes cuenta?{" "}
            <span onClick={() => changeForm()}>Crea una ahora</span>
          </p>
          <TodoButton text="Login" type="submit" />
        </Form>
      </FormsContainer>
    </>
  );
}

export default LoginForm;
