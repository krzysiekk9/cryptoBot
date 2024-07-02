import styled from "styled-components";

export const WhySection = styled.section`
  width: 100dvw;
  height: 120dvh;
  max-width: 100%;
  max-height: 100%;
  text-transform: uppercase;
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  color: #000;
`;

export const WhyTextWrapper = styled.div`
  background-color: #fff;
  width: 60%;
  height: 100%;
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WhyTitle = styled.h1`
  margin: 0;
  position: absolute;
  top: 2rem;
  font-size: 6rem;
  width: 50%;
  text-align: center;
  font-weight: 900;
  @media (max-width: 1500px) {
    font-size: 4rem;
  }
`;

export const Question = styled.button`
  cursor: pointer;
  left: 0;

  font-family: "Roboto Mono", monospace;
  font-weight: 500;
  font-size: 2rem;
  padding: 1rem 1rem 1rem 1rem;
  background: none;
  border: none;
  border-right: none;

  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;

  &:hover {
    scale: 0.97;
    opacity: 0.7;
  }

  @media (max-width: 1500px) {
    font-size: 1.5rem;
  }
`;

export const QuestionButtonContainer = styled.div`
  position: absolute;
  left: 1rem;
  height: 30%;
  top: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: right;
`;

export const WhyText = styled.div`
  position: absolute;
  top: 55%;
  left: 7rem;

  font-family: "Roboto Mono", monospace;
  font-weight: 400;
  font-size: 1.5rem;
  width: 60%;
  padding-left: 6rem;

  & h1 {
    font-size: 2rem;
    font-weight: 500;
    margin: 0;
    padding-top: 1rem;
  }
  & p {
    margin: 0;
    text-align: justify;
    padding-top: 1rem;
  }

  & .hidden {
    display: none;
  }
  @media (max-width: 1500px) {
    font-size: 1.3rem;
  }
`;
