import React, { Component } from "react";
import { connect } from "react-redux";
import {
  loadSorteios,
  destroySorteio,
  Creators
} from "../../store/ducks/sorteios";
import SorteioListGroup from "../../components/SorteioListGroup";

class SorteioPage extends Component {
  componentDidMount() {
    this.props.loadSorteios();
  }
  handleDeleteClick(sorteio) {
    this.props.destroySorteio(sorteio);
  }
  handleEditClick(sorteio) {
    this.props.selectSorteio(sorteio);
    this.props.history.push(`/sorteios/${sorteio._id}/members`);
  }
  handleNewClick() {
    this.props.history.push("/sorteios/form");
  }
  render() {
    const { sorteios } = this.props;
    return <SorteioListGroup 
      sorteios={sorteios.list} 
      onNewClick={this.handleNewClick.bind(this)} 
      onDeleteClick={this.handleDeleteClick.bind(this)} 
      onEditClick={this.handleEditClick.bind(this)} />
  }
}

const mapStateToProps = (state) => ({
  sorteios: state.sorteios
});

const mapDispatchToProps = {
  destroySorteio,
  loadSorteios,
  ...Creators
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SorteioPage);
