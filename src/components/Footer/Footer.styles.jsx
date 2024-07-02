import styled from "styled-components";

export const FooterContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  width: 40%;
  bottom: 1rem;
  justify-content: center;
  & a {
    margin-left: 3rem;
  }

  & img {
    height: 2rem;
    width: auto;
  }
`;
