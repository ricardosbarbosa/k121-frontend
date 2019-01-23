import React, { Component } from 'react'
import { connect } from "react-redux";
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
      const { updateSorteio, history } = this.props;
      updateSorteio(values);
      history.push(`/sorteios/${values._id}/members`);
    }
    else {
      const { saveSorteio, history } = this.props
      saveSorteio(values);
      history.push(`/sorteios/`);
    }
  }

  render() {
    const { selected } = this.props;
    return (
      <SorteioForm 
        initialValues={selected} 
        onSubmit={this.submit.bind(this)} />
    )
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
