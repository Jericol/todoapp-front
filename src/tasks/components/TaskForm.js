import React from "react";
import TodoButton from "../../atoms/Buton";
import {
  FormsContainer,
  Form,
  TwoButtonsContainer,
} from "../../atoms/Form.styled";
import { Select } from "../../atoms/input";
import { Input, InputContainer } from "../../atoms/input";
import { useForm } from "react-hook-form";

function TaskForm({ closeModal }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const userData = JSON.parse(localStorage.getItem("userData"));
  const { token, id } = userData;

  const createTask = (data) => {
    const { title, description, categories } = data;
    const formatData = {
      task: { title, description, userId: id },
      categories,
    };
    console.log(formatData);
    fetch("http://localhost:8000/api/v1/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formatData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <FormsContainer>
      <h2>Crear nueva tarea</h2>
      <Form onSubmit={handleSubmit(createTask)}>
        <InputContainer>
          <i class="fa-solid fa-signature"></i>
          <Input
            placeholder="Nombre de la tarea"
            {...register("title", { required: true })}
          />
        </InputContainer>
        <InputContainer>
          <i class="fa-solid fa-file-pen"></i>
          <Input
            placeholder="Descripción"
            {...register("description", { required: true })}
          />
        </InputContainer>

        <Select multiple {...register("categories", { required: true })}>
          <option value={1}>Trabajo</option>
          <option value={2}>Escuela</option>
          <option value={3}>Hogar</option>
        </Select>
        <TwoButtonsContainer>
          <TodoButton text="Cancelar" onClick={() => closeModal()} />
          <TodoButton type="submit" text="Crear" />
        </TwoButtonsContainer>
      </Form>
    </FormsContainer>
  );
}

export default TaskForm;
