import React, { Component } from 'react'
import { ListGroup, Button, Container } from "reactstrap";
import SorteioListGroupItem from './SorteioListGroupItem';

export default class SorteioListGroup extends Component {
  render() {
    const { sorteios, onDeleteClick, onEditClick, onNewClick } = this.props;
    
    return <Container >
        <h1>Sorteios de amigos secretos</h1>
        <div>
          <Button color="warning" size="lg" onClick={() => onNewClick()}>
            <i className="fa fa-plus" /> New Sorteio
          </Button>
        </div>
        <ListGroup className="my-3">
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
    </Container>;
  }
}
