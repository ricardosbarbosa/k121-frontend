import React, { Component } from 'react'
import { Button, CardBody, CardFooter, Container, FormText } from "reactstrap";
import { connect } from 'react-redux'
import { Redirect} from "react-router-dom";
import MemberForm from "../../../components/MemberForm";
import MemberListGroup from "../../../components/MemberListGroup";
import {
  loadMembers,
  saveMember,
  destroyMember,
  updateMember,
  Creators
} from "../../../store/ducks/members";

class MembersPage extends Component {
  componentDidMount() {
    const { loadMembers, sorteio } = this.props
    if (sorteio) loadMembers(sorteio._id);
  }
  submit(values) {
    const { updateMember, saveMember, sorteio } = this.props;
    if (values._id)
      updateMember(values, sorteio._id);
    else
      saveMember(values, sorteio._id);
  }
  onDeleteClick(member) {
    const { destroyMember, sorteio } = this.props;
    destroyMember(member, sorteio._id);
  }
  onEditClick(member) {
    const { selectMember } = this.props;
    selectMember(member);
  }

  back() {
    this.props.history.push("/sorteios/")
  }
  goSorteio() {
    const {sorteio} = this.props
    this.props.history.push(`/sorteios/${sorteio._id}/intro`)
  }

  render() {
    const { sorteio, members } = this.props
    if (!sorteio) return <Redirect to="/sorteios" />
    return <Container>
        <CardBody>
          <h2>
            Adicione membros ao sorteio
            <FormText>{sorteio.name}</FormText>
          </h2>
          <MemberForm onSubmit={this.submit.bind(this)} initialValues={members.selected} />
          <MemberListGroup members={members.list} onDeleteClick={this.onDeleteClick.bind(this)} onEditClick={this.onEditClick.bind(this)} />
          <CardFooter>
            <div className="d-flex justify-content-between">
              <div>
                <Button color="info" onClick={this.back.bind(this)}>
                  <i className="fa fa-arrow-left" /> Back
                </Button>
              </div>
              <div>
                <Button onClick={this.goSorteio.bind(this)} color="info" disabled={members.list.length < 3}>
                  Sorteio <i className="fa fa-arrow-right" />
                </Button>
              </div>
            </div>
          </CardFooter>
        </CardBody>
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
