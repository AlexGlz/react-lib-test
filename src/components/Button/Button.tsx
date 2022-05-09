import React from "react";
import "./Button.scss"


export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className="myButton"><b>{props.label}</b></button>;
};

export default Button;