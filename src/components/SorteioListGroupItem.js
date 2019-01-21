import React from 'react'
import { ListGroupItem, Button, ButtonGroup } from "reactstrap";

const SorteioListGroupItem = ({ sorteio, onEditClick, onDeleteClick }) => {
  return <ListGroupItem>
      <div className="float-right">
        <ButtonGroup>
          <Button outline onClick={() => onEditClick(sorteio)}>
            <i className="fas fa-pencil-alt" /> Entrar
          </Button>
          <Button outline onClick={() => onDeleteClick(sorteio)}>
            <i className="far fa-trash-alt" />
          </Button>
        </ButtonGroup>
      </div>
      {sorteio.name}
    </ListGroupItem>;
};

export default SorteioListGroupItem