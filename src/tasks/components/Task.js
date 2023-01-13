import React from "react";
import {
  TaskArea,
  TaskComponent,
  TaskDescription,
  TaskTitle,
  CategoryContainer,
  CreateContainer,
  ButtonContainer,
} from "../../atoms/Tasks.styled";
import TodoButton from "../../atoms/Buton";
import Category from "./Category";

function Task({ title, description, categories }) {
  console.log(categories);
  return (
    <TaskArea>
      <TaskComponent>
        <TaskTitle>{title}</TaskTitle>
        <TaskDescription>{description}</TaskDescription>
        <CategoryContainer>
          {categories.map((category) => {
            return <Category key={category} categoryName={category} />;
          })}
        </CategoryContainer>
        <CreateContainer>
          <ButtonContainer>
            <TodoButton
              text="Completar"
              onClick={() => {
                console.log("completada");
              }}
            />
          </ButtonContainer>
        </CreateContainer>
      </TaskComponent>
    </TaskArea>
  );
}

export default Task;
