import React, { Component } from "react";
import SorteioIntro from "../../components/SorteioIntro";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  testSorteio,
  performSorteio,
} from "../../store/ducks/sorteios";

class SorteioIntroPage extends Component {
  handleTestClick() {
    const { sorteio, history, testSorteio } = this.props;
    testSorteio(sorteio._id);
    history.push(`/sorteios/${sorteio._id}/test`);
  }
  handleSortearClick() {
    const { sorteio, history, performSorteio } = this.props;
    performSorteio(sorteio._id);
    history.push(`/sorteios/`);
  }
  back() {
    const { sorteio, history } = this.props
    history.push(`/sorteios/${sorteio._id}/members`);
  }
  render() {
    const { sorteio } = this.props;
    if (!sorteio) return <Redirect to="/sorteios" />;
    return (
      <SorteioIntro
        handleBackClick={this.back.bind(this)}
        handleSortearClick={this.handleSortearClick.bind(this)}
        handleTestClick={this.handleTestClick.bind(this)}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  sorteio: state.sorteios.selected
});

const mapDispatchToProps = {
  testSorteio,
  performSorteio
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SorteioIntroPage);

