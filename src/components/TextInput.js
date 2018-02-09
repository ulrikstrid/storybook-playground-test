import * as React from "react";

const TextInput = props => {
  const onChange = e => {
    props.onChange(e.target.value);
  };

  return <input type="text" value={props.value} onChange={onChange} />;
};

export default TextInput;
