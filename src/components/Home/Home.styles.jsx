import styled from "styled-components";

export const HomeWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;
  z-index: 1;
  margin: 0;
`;

export const HomeSection = styled.div`
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const HomeTextWrapper = styled.div`
  max-width: 40%;
  padding-left: 7rem;
  padding-top: 7rem;
  line-height: 7.5rem;
  display: block;
  text-transform: uppercase;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 7rem;
  font-weight: 900;
  font-style: normal;
  color: #fffffffa;
  text-shadow: 0 0 10px #2c2c2c, 0 0 10px #2c2c2c;

  @media (max-width: 1500px) {
    font-size: 4rem;
    line-height: 4.5rem;
  }

  & p {
    margin: 0;
    padding-left: 1.6rem;
    padding-top: 2rem;
    height: 2.5rem;
    font-size: 2.5rem;
    font-weight: 100;
    line-height: 2.5rem;
    letter-spacing: 1rem;

    @media (max-width: 1500px) {
      font-size: 1.7rem;
      line-height: 2rem;
    }
  }
`;
