import React from 'react'
import { ListGroupItem, FormText } from "reactstrap";

const MemberListGroupItem = ({ member, onEditClick, onDeleteClick }) => {
  return (
    <ListGroupItem>
      <div className="float-right">
        <i className="fas fa-pencil-alt ml-2" onClick={() => onEditClick(member)} />
        <i className="far fa-trash-alt ml-2" onClick={() => onDeleteClick(member)} />
      </div>
      {member.name}
      <FormText>{member.email}</FormText>
    </ListGroupItem>
  );
};
export default MemberListGroupItem