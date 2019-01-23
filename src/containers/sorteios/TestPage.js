import React, { Component } from 'react'
import { connect } from 'react-redux'
import SorteioTest from '../../components/SorteioTest';
import { Redirect } from "react-router-dom";

class SorteioPage extends Component {
  handleBackClick() {
    const { sorteio, history } = this.props;
    history.push(`/sorteios/${sorteio._id}/intro`);
  }

  render() {
    const { sorteio, testResult } = this.props;
    if (!sorteio) return <Redirect to="/sorteios" />;
    
    return (
      <SorteioTest 
        list={testResult} 
        handleBackClick={this.handleBackClick.bind(this)} />
    )
  }
}

const mapStateToProps = state => ({
  sorteio: state.sorteios.selected,
  testResult: state.sorteios.testResult
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SorteioPage);