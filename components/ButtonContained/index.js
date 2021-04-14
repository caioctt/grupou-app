import React from "react";
import { Text, TouchableOpacity } from "./styles";

const Button = ({ text, ...others }) => {
  return (
    <TouchableOpacity {...others}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  marginRight: "8px",
};

export default Button;


