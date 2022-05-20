import React from "react";
import ClayButton from "@clayui/button"
import "./Button.scss"


export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <ClayButton className="myButton"><b>{props.label}</b></ClayButton>;
};

export default Button;