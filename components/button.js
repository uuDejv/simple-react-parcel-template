import React from "react";
import styled from "@emotion/styled";

const Button = (props) => {
  return <StyledButton {...props}>{props.label}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  padding: 8px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;
