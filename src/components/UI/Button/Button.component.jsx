import React from "react";

import { ButtonContainer } from "./Button.styles";

const Button = ({ type, value, onClick }) => {
  return <ButtonContainer type={type} value={value} onClick={onClick} />;
};

export default Button;
