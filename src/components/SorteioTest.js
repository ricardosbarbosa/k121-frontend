import React from "react";
import {
  Button,
  Container,
  Card,
  CardBody,
  CardHeader,
  ListGroupItem,
  ListGroup,
  FormText
} from "reactstrap";

const SorteioTest = ({ list, handleBackClick }) => {
  if (!list) return <div />;
  return <Container>
      <Card className="m-3">
        <CardHeader>
          Resultado do teste
          <FormText>
            Este é apenas um exemplo! os amigos definitivos serão outros...
          </FormText>
        </CardHeader>
        <CardBody>
        <div className="d-flex justify-content-center">
          <h4 className="align-self-center">...presentearia a...</h4>
        </div>
          <ListGroup>
            {list.map((member, index, array) => <ListGroupItem key={index}>
                <div className="d-flex justify-content-between">
                  <div style={{ width: "40%", textAlign: "left" }}>
                    {member.name}
                  </div>
                  <i style={{ width: "20%", textAlign: "center" }} className="fa fa-arrow-right" />
                  <div style={{ width: "40%", textAlign: "right" }}>
                    {array[index + 1 === array.length ? 0 : index + 1].name}
                  </div>
                </div>
              </ListGroupItem>)}
          </ListGroup>

          <Button className="mt-3" onClick={() => handleBackClick()}>
            <i className="fa fa-arrow-left" /> Back
          </Button>
        </CardBody>
      </Card>
    </Container>;
};

export default SorteioTest;
