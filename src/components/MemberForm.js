import React from "react";
import { Button, Form, Card, FormText, CardBody, CardHeader, FormFeedback, FormGroup, Label, Input } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import {
  required,
  email, 
} from "../validations";

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

class MemberForm extends React.Component {
  render() {
    const { handleSubmit, sorteio } = this.props;
    return <Card className="m-3">
      <CardHeader>
        Adicione membros ao sorteio
        <FormText>{sorteio.name}</FormText>
      </CardHeader>
      <CardBody>
        <Form onSubmit={handleSubmit} id="myForm" >
          <Field name="name" label="Nome" validate={[required]} type="text" component={renderFieldRow} placeholder="Fulano de Tal" />
          <Field name="email" label="Email" validate={[required, email]} type="email" component={renderFieldRow} placeholder="something@idk.cool" />
          <Button color="warning" form="myForm" key="submit" >
            <i className="fas fa-plus"></i> Save
        </Button>
        </Form>
      </CardBody>
    </Card>
  }
}

export default reduxForm({ form: "memberForm", enableReinitialize: true })(MemberForm);