import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import MembersPage from "./containers/members/Page";
import SorteioIntroPage from "./containers/sorteios/IntroPage";
import SorteioTestPage from "./containers/sorteios/TestPage";
import SorteiosPage from "./containers/sorteios/ListPage";
import SorteiosFormPage from "./containers/sorteios/FormPage";
import Alert from './components/Alert';
class App extends Component {
  render() {
    const { alert } = this.props
    return <div className="App">
        {alert.message && <Alert color={alert.type}>{alert.message}</Alert>}
        <Switch>
          <Route path="/sorteios/" exact component={SorteiosPage} />
          <Route path="/sorteios/form" exact component={SorteiosFormPage} />
          <Route path="/sorteios/:id/members" component={MembersPage} />
          <Route path="/sorteios/:id/intro" component={SorteioIntroPage} />
          <Route path="/sorteios/:id/test" component={SorteioTestPage} />
          <Redirect to="/sorteios/" />
        </Switch>
      </div>;
  }
}

const mapStateToProps = state => ({
  alert: state.alert
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);