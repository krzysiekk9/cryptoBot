import styled from "styled-components";

export const FeautersSection = styled.section`
  width: 100dvw;
  height: 170dvh;
  max-width: 100%;
  max-height: 100%;
  background-color: #fff;

  font-family: "Roboto Mono", monospace;

  & h1 {
    font-weight: 500;
    font-size: 3rem;
    text-transform: uppercase;

    @media (max-width: 1500px) {
      font-size: 1.5rem;
    }
  }
  & ul {
    list-style-type: none;
    text-align: justify;
    padding-top: 1rem;
  }
  & span {
    font-weight: 500;
    font-size: 1.5rem;

    @media (max-width: 1500px) {
      font-size: 1.1rem;
    }
  }
  & li {
    font-size: 1.2rem;
    padding-bottom: 2rem;

    @media (max-width: 1500px) {
      font-size: 1rem;
    }
  }
  & p {
    margin: 0;
  }
`;
export const TextWrapper = styled.div`
  position: absolute;
  right: 0;
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media (max-width: 1500px) {
    right: 5rem;
  }
`;

export const FeautersContainer = styled.div`
  width: 40%;
`;

export const FeaturesWrapper = styled.ul`
  list-style-type: none;
  text-align: justify;
  width: 35%;
  padding-top: 1rem;
`;

export const HowItWorksContainer = styled.div`
  width: 40%;
`;
