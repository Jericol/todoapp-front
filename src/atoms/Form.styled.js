import styled from "styled-components";

export const FormsContainer = styled.div`
  background: #fff;
  width: 50%;
  min-width: 300px;
  padding: 40px 30px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  box-shadow: 2px 1px 14px 5px rgba(82, 81, 81, 0.75);
`;

export const FormsModal = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(45, 144, 113, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const TwoButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
`;
