import * as React from "react";
import * as ReactDOM from "react-dom";

const bootstrapWidget = (component, props, id) => {
  ReactDOM.render(
    React.createElement(component, props),
    document.getElementById(id)
  );
};

export default bootstrapWidget;
window.bootstrapWidget = bootstrap;
