import React, { Component } from 'react'
import { ListGroup } from "reactstrap";
import MemberListGroupItem from "./MemberListGroupItem";

export default class MemberListGroup extends Component {
  render() {
    const { members, onDeleteClick, onEditClick } = this.props;
    return <div className="my-3">
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
      </div>;
  }
}
