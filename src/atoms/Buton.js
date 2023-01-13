import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: #00cba9;
  width: 100%;
  border: none;
  padding: 15px 15px;
  outline: none;
  border-radius: 7px 7px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
`;

function TodoButton({ text, type, onClick }) {
  return (
    <Button type={type} onClick={onClick}>
      {text}
    </Button>
  );
}

export default TodoButton;
