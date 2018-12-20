import React from "react";
import { Button, Form, FormFeedback, FormGroup, Label, Input } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import {
  maxLength,
  required,
  minLength,
  email, 
  alphaNumeric
} from "./validations";

const renderFieldRow = ({
  children,
  placeholder,
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
      <FormGroup style={{ verticalAlign: "top"}}>
      <Input
        type={type}
        {...input}
        name={label}
          id={label} size="sm" 
        placeholder={placeholder}
        valid={touched && (!error || !warning)}
        invalid={touched && (error || warning)}
      />
      <FormFeedback className="form-control-danger float-left">
        {error}
      </FormFeedback>
      <FormFeedback className={"form-control-warning float-left"}>
        {warning}
      </FormFeedback>
    </FormGroup>
  </div>
);

class PessoaForm extends React.Component {
  render() {
    return <Form onSubmit={this.props.handleSubmit} id="myForm" className="m-3">
        <Field name="nome" label="Nome" validate={[required]} warn={[alphaNumeric]} type="text" component={renderFieldRow} placeholder="Fulano de Tal" />
        <Field name="email" label="Email" validate={[required, email]} type="email" component={renderFieldRow} placeholder="something@idk.cool" />
        <Button color="warning" form="myForm" key="submit" size="sm">
          Salvar
        </Button>
      </Form>;
  }
}

export default reduxForm({ form: "pessoaForm", enableReinitialize: true })(PessoaForm);