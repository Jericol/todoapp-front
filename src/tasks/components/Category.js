import React from "react";
import { TaskCategory } from "../../atoms/Tasks.styled";

function Category({ categoryName }) {
  return <TaskCategory>{categoryName}</TaskCategory>;
}

export default Category;
