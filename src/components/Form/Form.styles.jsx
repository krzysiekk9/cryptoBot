import styled from "styled-components";
import { ButtonContainer } from "../UI/Button/Button.styles";

export const FormSection = styled.section`
  width: 100dvw;
  height: 100dvh;
  max-width: 100%;
  max-height: 100%;
  position: relative;
  background-color: #000;
  color: #fff;
`;

export const FormTitle = styled.h1`
  margin: 0;
  width: 50%;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 6rem;
  font-weight: 900;
  font-style: normal;
  text-transform: uppercase;
  text-align: center;

  @media (max-width: 1500px) {
    font-size: 4rem;
  }
`;

export const FormContainer = styled.form`
  width: 40%;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  padding-left: 4rem;
  font-family: "Roboto Mono", monospace;
  font-size: 1.2rem;
  font-weight: 200;
  letter-spacing: 2px;

  & .form-email {
    display: flex;
    flex-direction: column;
  }
  & .form-description {
    display: flex;
    flex-direction: column;
  }

  & label {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  & input {
    width: 40%;
    font-family: "Roboto Mono", monospace;
    letter-spacing: 2px;
    color: #fff;
    background: none;
    border: 2px solid #ffffffcd;
    border-radius: 10px;
    padding: 1rem 1rem;
  }

  & textarea {
    width: 70%;
    height: 6rem;
    font-family: "Roboto Mono", monospace;
    color: #fff;
    letter-spacing: 2px;
    background: none;
    border: 2px solid #ffffffcd;
    border-radius: 10px;
    padding: 1rem 1rem;
  }

  @media (max-width: 1500px) {
    font-size: 1rem;
  }
`;

export const Button = styled(ButtonContainer)`
  position: relative;
  right: 8rem;
  top: 2rem;
`;

export const Modal = styled.div`
  position: fixed;
  background-color: #3cc77a;
  border-radius: 5px;
  text-align: center;
  align-content: center;
  padding: 1rem 3rem;
  color: #fff;
  font-family: "Roboto Mono", monospace;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 1px;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  animation: fade-out 3s infinite;

  @keyframes fade-out {
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    0% {
      opacity: 0.1;
    }
  }
`;
