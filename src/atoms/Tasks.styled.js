import styled from "styled-components";

export const TaskContainer = styled.div`
  width: 70%;
  margin: auto;
`;

export const CreateContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ButtonContainer = styled.div`
  width: 30%;
`;

export const TaskArea = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TaskComponent = styled.div`
  border: 1px solid #00cba9;
  border-radius: 7px;
  padding: 15px 20px;
  text-align: left;
`;

export const TaskTitle = styled.h3`
  font-size: 20px;
  color: #00cba9;
`;

export const TaskDescription = styled.p`
  font-size: 14px;
  color: #2d5b52;
`;

export const TaskCategory = styled.div`
  width: fit-content;
  border-radius: 25px;
  background: rgba(9, 207, 168, 0.4);
  padding: 10px;
  text-align: center;
  color: #fff;
`;

export const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
