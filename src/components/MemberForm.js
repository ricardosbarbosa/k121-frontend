import React from "react";
import { Button, Form, Card, FormText, CardBody, CardHeader } from "reactstrap";
import { Field } from "redux-form";
import { required, email } from "../validations";
import { renderFieldRow } from "./utils";

const MemberForm = ({ handleSubmit, sorteio }) => {
  
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

export default MemberForm
