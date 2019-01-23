import React, { Component } from 'react'
import { ListGroup, Button, Container, Card, CardHeader, CardBody } from "reactstrap";
import SorteioListGroupItem from './SorteioListGroupItem';

export default class SorteioListGroup extends Component {
  render() {
    const { sorteios, onDeleteClick, onEditClick, onNewClick } = this.props;
    
    return <Container>
        <Card className="m-3">
          <CardHeader>
            <Button color="warning" onClick={() => onNewClick()}>
              <i className="fa fa-plus" /> New Sorteio
            </Button>
            {" "}Sorteios de amigos secretos
          </CardHeader>

          <CardBody>
            <ListGroup >
              {sorteios &&
                sorteios.map(sorteio => (
                  <SorteioListGroupItem
                    key={sorteio._id}
                    sorteio={sorteio}
                    onDeleteClick={onDeleteClick}
                    onEditClick={onEditClick}
                  />
                ))}
            </ListGroup>
          </CardBody>
        </Card>
      </Container>;
  }
}
