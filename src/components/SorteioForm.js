import React from "react";
import { Button, Form, CardHeader, Card, CardBody, Container } from "reactstrap";
import { Field } from "redux-form";
import { required } from "../validations";
import { renderFieldRow } from "./utils";

const SorteioForm = ({handleSubmit}) => {
  
    return <Container>
        <Card>
          <CardHeader>
            Escolha o nome do seu sorteio de amigo secreto
          </CardHeader>
        </Card>
        <CardBody>
          <Form onSubmit={handleSubmit} id="myForm" className="my-3">
            <Field name="name" label="Nome" validate={[required]} type="text" component={renderFieldRow} placeholder="Fulano de Tal" />
            <Button color="warning" form="myForm" key="submit" className="float-right">
              <i className="fas fa-plus" /> Save
            </Button>
          </Form>
        </CardBody>
      </Container>;
    
}

export default SorteioForm