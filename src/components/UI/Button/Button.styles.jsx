import styled from "styled-components";

export const ButtonContainer = styled.button`
  margin: 0;
  position: absolute;
  top: 85%;
  right: 50%;
  transform: translateX(50%);
  padding: 0.7rem 2rem;
  text-transform: uppercase;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1rem;
  color: #fff;
  --offset: 2px;
  background-color: #000;
  border: none;

  border-radius: 20px;
  height: 50px;
  width: 300px;
  overflow: hidden;

  &:hover {
    cursor: pointer;
    scale: 0.99;
    opacity: 0.8;
  }

  &::before {
    content: "";
    position: fixed;
    top: 50%;
    left: 50%;
    background: conic-gradient(transparent 270deg, white, transparent);
    aspect-ratio: 1;
    width: 100%;
    height: 300px;
    animation: rotate 8s linear infinite;
  }

  &::after {
    content: "${(props) => props.value}";
    display: flex;
    align-items: center;
    justify-content: center;

    background: inherit;
    border-radius: inherit;
    position: fixed;
    inset: var(--offset);
    height: calc(100% - 2 * var(--offset));
    width: calc(100% - 2 * var(--offset));
  }

  @keyframes rotate {
    from {
      transform: translate(-50%, -50%) scale(1.4) rotate(0turn);
    }

    to {
      transform: translate(-50%, -50%) scale(1.4) rotate(1turn);
    }
  }
`;
