import React, { Component } from 'react'
import {
  Card, CardBody,
  CardHeader, Button
} from "reactstrap";

const PessoaItem = ({
  pessoa,
  revelado,
  onEditClick,
  onDeleteClick,
  onRevelarMouseEnter,
  onRevelarMouseLeave
}) => {
  console.log(revelado);

  const className =
    revelado && revelado.amigo === pessoa._id ? "m-1 bg-warning" : "m-1";
  return (
    <Card className={className}>
      <CardHeader>
        <div className="float-right">
          <i className="far fa-edit ml-2" onClick={() => onEditClick(pessoa)} />
          <i
            className="far fa-times-circle ml-2"
            onClick={() => onDeleteClick(pessoa)}
          />
        </div>
        {pessoa.nome}
      </CardHeader>
      <CardBody>
        <div>{pessoa.email}</div>
        <Button
          color="dark"
          size="sm"
          onMouseEnter={() => onRevelarMouseEnter(pessoa)}
          onMouseLeave={() => onRevelarMouseLeave()}
        >
          revelar amigo
        </Button>
      </CardBody>
    </Card>
  );
};
export default class List extends Component {
  render() {
    const { pessoas, revelado, onDeleteClick, onEditClick, onRevelarMouseLeave, onRevelarMouseEnter } = this.props;
    
    
    return <div className="d-flex flex-wrap justify-content-center m-3">
        {pessoas &&
          pessoas.map(p => (
            <PessoaItem
              key={p._id}
              pessoa={p}
              onDeleteClick={onDeleteClick}
              onEditClick={onEditClick}
              onRevelarMouseEnter={onRevelarMouseEnter}
              onRevelarMouseLeave={onRevelarMouseLeave}
              revelado={revelado}
            />
          ))}
      </div>;
  }
}
