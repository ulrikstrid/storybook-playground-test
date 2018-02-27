import * as React from "react";

const Button = props => (
  <button
    className={"Button " + props.level}
    onClick={props.onClick}
    disabled={props.disabled}
    type={props.type}
  >
    {props.children}
  </button>
);

export default Button;
