import React, { Component } from 'react'
import { connect } from "react-redux";
import { Container, CardBody } from "reactstrap";
import {
  loadSorteios,
  saveSorteio,
  destroySorteio,
  updateSorteio,
  Creators
} from "../../store/ducks/sorteios";
import SorteioForm from '../../components/SorteioForm';

class Form extends Component {
  submit(values) {
    if (values._id) {
      this.props.updateSorteio(values);
      this.props.history.push("/sorteios/members")
    }
    else {
      this.props.saveSorteio(values);
    }
  }

  render() {
    const { selected } = this.props;
    return <Container>
        <CardBody>
          <h2>Escolha o nome do seu sorteio de amigo secreto</h2>
          <SorteioForm onSubmit={this.submit.bind(this)} initialValues={selected} />
        </CardBody>
      </Container>;
  }
}


const mapStateToProps = state => ({
  selected: state.sorteios.selected
});

const mapDispatchToProps = {
  loadSorteios,
  saveSorteio,
  destroySorteio,
  updateSorteio,
  ...Creators
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
