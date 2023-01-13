import React from "react";
import TodoButton from "../../atoms/Buton";
import { InputContainer, Input, ErrorMessage } from "../../atoms/input";
import { FormsContainer, Form } from "../../atoms/Form.styled";
import { useForm } from "react-hook-form";

function RegisterForm({ changeForm, onRegister }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  return (
    <>
      <FormsContainer>
        <h2>Listo para crear tareas</h2>
        <Form onSubmit={handleSubmit(onRegister)}>
          <InputContainer>
            <i class="fa-solid fa-user"></i>
            <Input
              placeholder="Nombre"
              {...register("username", { required: true })}
            />
          </InputContainer>
          <InputContainer>
            <i class="fa-solid fa-envelope"></i>
            <Input
              placeholder="email"
              {...register("email", { required: true })}
            />
          </InputContainer>
          <InputContainer>
            <i class="fa-solid fa-lock"></i>
            <Input
              type="password"
              placeholder="Contraseña"
              {...register("password", { required: true })}
            />
          </InputContainer>
          <p>
            ¿Ya tienes cuenta? <span onClick={() => changeForm()}>Ingresa</span>
          </p>
          <TodoButton text="Registrar" type="submit" />
        </Form>
      </FormsContainer>
    </>
  );
}

export default RegisterForm;
