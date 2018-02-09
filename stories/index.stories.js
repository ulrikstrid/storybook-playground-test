import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Header from "../src/components/Header";
import Button from "../src/components/Button";
import TextInput from "../src/components/TextInput";
import NumberInput from "../src/components/NumberInput";
import Tavling from "../src/widgets/Tavling";
import InvoiceForm from "../src/widgets/InvoiceForm";

storiesOf("Widget", module)
  .add("tävling", () => <Tavling />)
  .add("Fakturaformulär", () => (
    <InvoiceForm onSubmit={action("submit-form")} name="Johan" price={1000} />
  ));

storiesOf("Components", module).add("header", () => <Header>header</Header>);

storiesOf("Components/Input")
  .add("text input", () => (
    <TextInput value="input" onChange={action("input-change")} />
  ))
  .add("number input", () => (
    <NumberInput value={0} onChange={action("input-change")} />
  ));

storiesOf("Components/Button")
  .add("success", () => (
    <Button onClick={action("submit-click")} level="success">
      Submit
    </Button>
  ))
  .add("warn", () => (
    <Button onClick={action("cancel-click")} level="warn">
      Cancel
    </Button>
  ))
  .add("default", () => (
    <Button onClick={action("default-click")}>default</Button>
  ));
