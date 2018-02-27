import * as React from "react";
import * as ReactDOM from "react-dom";

import Header from "../components/Header";

const Tavling = ({ message }) => (
  <div className="tavling qa-tavling-widget">
    <Header>Tävling</Header>
    <p>{message}</p>
  </div>
);

class TavlingElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    ReactDOM.render(
      <Tavling {...JSON.parse(this.getAttribute("data"))} />,
      this
    );
  }
}

customElements.define("tavling-widget", TavlingElement);

export default Tavling;
