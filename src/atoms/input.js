import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  color: black;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #00cba9;
  &:focus {
    border-bottom: 3px solid #00cba9;
  }
  color: #00cba9;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  padding: 15px;
  outline: none;
  border-radius: 7px 7px 0 0;
`;

export const ErrorMessage = styled.span`
  color: #e22900;
  font-size: 12px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px 0;
  border-radius: 7px;
  border: 2px solid #00cba9;
  &:focus {
    border-bottom: 3px solid #00cba9;
  }
  outline: none;
  color: #00cba9;
`;
