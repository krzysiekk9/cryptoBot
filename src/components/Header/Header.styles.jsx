import styled from "styled-components";

export const HeaderCont = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  width: 100%;
  margin: 0;

  & img {
    height: 2rem;
    padding: 1rem 1rem;
    width: auto;
  }
`;

export const HeaderNavigation = styled.div`
  & a {
    font-family: "Noto Sans KR", sans-serif;
    margin: 0;
    font-size: 1.5rem;
    font-weight: 100;
    line-height: 2.5rem;
    letter-spacing: 0.5rem;
    text-decoration: none;
    text-shadow: 0 0 10px #2c2c2c, 0 0 10px #2c2c2c;
    color: #fff;
    margin-left: 2rem;
    margin-right: 2rem;
  }
`;
