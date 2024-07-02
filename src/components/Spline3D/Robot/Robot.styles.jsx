import styled from "styled-components";

export const Robot = styled.div`
  position: fixed;
  width: 100% !important;
  height: 100% !important;
  z-index: 10 !important ;
  margin: 0 !important;
  pointer-events: none;

  @media (max-width: 1500px) {
    display: none;
  }
`;
