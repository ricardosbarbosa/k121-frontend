import React from "react";
import { Button, Form, FormFeedback, FormGroup, Label, Input } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import { required } from "../validations";

const renderFieldRow = ({
  children,
  placeholder,
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
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

class SorteioForm extends React.Component {
  render() {
    return <Form onSubmit={this.props.handleSubmit} id="myForm" className="my-3" >
        <Field name="name" label="Nome" validate={[required]} type="text" component={renderFieldRow} placeholder="Fulano de Tal" />
        <Button color="warning" form="myForm" key="submit" className="float-right">
          <i className="fas fa-plus"></i> Save
        </Button>
      </Form>;
  }
}

export default reduxForm({ form: "sorteioForm", enableReinitialize: true })(SorteioForm);