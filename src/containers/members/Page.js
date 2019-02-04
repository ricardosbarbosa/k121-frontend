import React, { Component } from 'react'
import { Container } from "reactstrap";
import { connect } from 'react-redux'
import { Redirect} from "react-router-dom";
import MemberForm from "../../components/MemberForm";
import MemberListGroup from "../../components/MemberListGroup";
import { reduxForm } from "redux-form";
import {
  loadMembers,
  saveMember,
  destroyMember,
  updateMember,
  Creators
} from "../../store/ducks/members";


const MemberFormWithRedux = reduxForm({ form: "memberForm", enableReinitialize: true })(MemberForm);

class MembersPage extends Component {
  
  componentDidMount() {
    const { loadMembers, sorteio } = this.props
    if (sorteio) loadMembers(sorteio._id);
  }

  submit(values) {
    const { updateMember, saveMember, sorteio } = this.props;
    if (values._id) updateMember(values, sorteio._id);
    else saveMember(values, sorteio._id);
  }

  handleDeleteClick(member) {
    const { destroyMember, sorteio } = this.props;
    destroyMember(member, sorteio._id);
  }

  handleEditClick(member) {
    const { selectMember } = this.props;
    selectMember(member);
  }

  handleBackClick() {
    this.props.history.push("/sorteios/")
  }

  handleGoSorteioClick() {
    const {sorteio} = this.props
    this.props.history.push(`/sorteios/${sorteio._id}/intro`)
  }

  render() {
    const { sorteio, members } = this.props
    if (!sorteio) return <Redirect to="/sorteios" />
    return <Container>
      <MemberFormWithRedux
        sorteio={sorteio}
        onSubmit={this.submit.bind(this)} 
        initialValues={members.selected} />
      <MemberListGroup members={members.list} 
        onDeleteClick={this.handleDeleteClick.bind(this)} 
        onEditClick={this.handleEditClick.bind(this)} 
        onBackClick={this.handleBackClick.bind(this)} 
        onGoSorteioClick={this.handleGoSorteioClick.bind(this)} />  
    </Container>;
  }
}

const mapStateToProps = state => ({
  members: state.members,
  sorteio: state.sorteios.selected
});

const mapDispatchToProps = {
  loadMembers,
  saveMember,
  destroyMember,
  updateMember,
  ...Creators
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MembersPage);
