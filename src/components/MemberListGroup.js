import React, { Component } from 'react'
import { ListGroup, Card, CardBody, CardFooter, Button } from "reactstrap";
import MemberListGroupItem from "./MemberListGroupItem";

export default class MemberListGroup extends Component {
  render() {
    const { members, onDeleteClick, onEditClick, onBackClick, onGoSorteioClick } = this.props;
    
    return <Card className="m-3">
        <CardBody>
          <ListGroup>
            {members &&
              members.map(p => (
                <MemberListGroupItem
                  key={p._id}
                  member={p}
                  onDeleteClick={onDeleteClick}
                  onEditClick={onEditClick}
                />
              ))}
          </ListGroup>
        </CardBody>
        <CardFooter>
          <div className="d-flex justify-content-between">
            <div>
              <Button color="info" onClick={() => onBackClick()}>
                <i className="fa fa-arrow-left" /> Back
              </Button>
            </div>
            <div>
              <Button onClick={() => onGoSorteioClick()} color="info" disabled={members && members.length < 3}>
                Sorteio <i className="fa fa-arrow-right" />
              </Button>
            </div>
          </div>
        </CardFooter>
      </Card>;
  }
}
