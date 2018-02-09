import * as React from "react";

import Button from "../components/Button";
import TextInput from "../components/TextInput";
import NumberInput from "../components/NumberInput";

const formGroupStyle = {
  width: 300,
  clear: "both"
};

const labelStyle = {
  display: "block"
};

class InvoiceForm extends React.Component {
  state = {
    name: this.props.name || "",
    price: this.props.price || 0
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Namn</label>
          <TextInput
            value={this.state.name}
            onChange={val => this.setState({ name: val })}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Pris</label>
          <NumberInput
            value={this.state.price}
            onChange={val => this.setState({ price: val })}
          />
        </div>
        <Button type="submit">Spara</Button>
      </form>
    );
  }
}

export default InvoiceForm;
