import * as React from "react";

const getBackgroundColor = level => {
  switch (level) {
    case "warn":
      return "red";
    case "success":
      return "green";
    default:
      return "white";
  }
};

const Button = props => (
  <button
    onClick={props.onClick}
    disabled={props.disabled}
    style={{
      background: getBackgroundColor(props.level),
      border: "1px solid black",
      borderRadius: 5,
      height: 40,
      width: 150
    }}
    type={props.type}
  >
    {props.children}
  </button>
);

export default Button;
