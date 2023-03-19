import React from "react";
import StyledButton from "./StyledButton";

const Button = ({ className, children, onclick }) => {

  return <StyledButton className={className} onClick={onclick}>{children}</StyledButton>;
};

export default Button;