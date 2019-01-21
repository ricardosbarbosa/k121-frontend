import React from "react";
import {
  Button,
  Container,
  CardBody,
  ListGroupItem,
  ListGroup
} from "reactstrap";

const SorteioTest = ({ list, handleBackClick }) => {
  if (!list) return <div />;
  return (
    <Container>
      <CardBody>
        <h2>Resultado do teste</h2>
        <p>Este é apenas um exemplo! os amigos definitivos serão outros...</p>

        <div className="d-flex justify-content-center">
          <h4 className="align-self-center">...presentearia a...</h4>
        </div>
        <ListGroup>
          {list.map((member, index, array) => (
            <ListGroupItem key={index}>
              <div className="d-flex justify-content-between">
                <div style={{ width: "40%", textAlign: "left" }}>
                  {member.name}
                </div>
                <i
                  style={{ width: "20%", textAlign: "center" }}
                  className="fa fa-arrow-right"
                />
                <div style={{ width: "40%", textAlign: "right" }}>
                  {array[index + 1 === array.length ? 0 : index + 1].name}
                </div>
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>

        <Button className="mt-3" onClick={() => handleBackClick()}>
          <i className="fa fa-arrow-left" /> Back
        </Button>
      </CardBody>
    </Container>
  );
};

export default SorteioTest;
