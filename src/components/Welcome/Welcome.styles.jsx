import styled from "styled-components";

export const WelcomeSection = styled.section`
  width: 100dvw;
  height: 120dvh;
  max-width: 100%;
  max-height: 100%;

  color: #000;
  text-transform: uppercase;
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  background-color: #000;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  scroll-snap-align: start;
`;

export const WelcomeTextWrapper = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: #fff;
`;

export const WelcomeTitle = styled.h1`
  margin: 0;
  top: 10%;
  font-size: 5.5rem;
  text-align: center;
  font-weight: 900;
  height: auto;
  @media (max-width: 1500px) {
    font-size: 4rem;
  }
`;

export const WelcomeText = styled.p`
  font-family: "Roboto Mono", monospace;
  width: 90%;
  padding-top: 1.5rem;
  font-size: 1.5rem;
  font-weight: 300;
  text-align: justify;
  letter-spacing: 0.15rem;

  @media (max-width: 1500px) {
    font-size: 1.2rem;
  }
`;
