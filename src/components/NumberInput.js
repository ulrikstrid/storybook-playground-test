import * as React from "react";

const NumberInput = props => {
  const onChange = e => {
    props.onChange(e.target.value);
  };

  return <input type="number" value={props.value} onChange={onChange} />;
};

export default NumberInput;
