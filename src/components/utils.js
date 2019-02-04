import React from "react";
import { FormFeedback, FormGroup, Label, Input } from "reactstrap";

export const renderFieldRow = ({ children, placeholder, input, label, type, meta: { touched, error, warning }}) => (
  <div>
    <FormGroup >
      <Label for={label} >
        {label}
      </Label>
      <Input
        type={type}
        {...input}
        name={label}
        id={label}
        valid={touched && (!error || !warning)}
        invalid={touched && !!(error || warning)}
      />
      <FormFeedback>{error}</FormFeedback>
    </FormGroup>
  </div>
);
