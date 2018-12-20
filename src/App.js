import React, { Component } from 'react';
import './App.css';
import Form from './Form'
import List from './List';
import { Button, FormText } from "reactstrap";
import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  loadPessoas,
  savePessoa,
  destroyPessoa,
  createSorteio,
  updatePessoa,
  Creators
} from "./store/ducks/pessoas";
class App extends Component {
  componentDidMount() {
    this.props.loadPessoas();
  }
  submit(values) {
    if (values._id) 
      this.props.updatePessoa(values);
    else 
      this.props.savePessoa(values);
  }
  onDeleteClick(pessoa) {
    this.props.destroyPessoa(pessoa);
  }
  onEditClick(pessoa) {
    this.props.selecionar(pessoa);
  }
  onSorteioClick() {
    this.props.createSorteio();
  }
  onRevelarMouseEnter(pessoa) {
    this.props.revelar(pessoa);
  }
  onRevelarMouseLeave() {
    this.props.revelar();
  }
  render() {
    const { pessoas, revelado, selecionado } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <Form onSubmit={this.submit.bind(this)} initialValues={selecionado}/>
          {pessoas.length > 2 && (
            <Button
              onClick={this.onSorteioClick.bind(this)}
              color="info"
              size="lg"
              className="m-3"
            >
              {" "}
              Sortear amigos secretos
            </Button>
          )}
          <List
            pessoas={pessoas}
            revelado={revelado}
            onDeleteClick={this.onDeleteClick.bind(this)}
            onEditClick={this.onEditClick.bind(this)}
            onRevelarMouseEnter={this.onRevelarMouseEnter.bind(this)}
            onRevelarMouseLeave={this.onRevelarMouseLeave.bind(this)}
          />
        </header>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  pessoas: state.pessoas.list,
  selecionado: state.pessoas.selecionado,
  revelado: state.pessoas.revelado,
});

const mapDispatchToProps = {
  loadPessoas,
  savePessoa,
  destroyPessoa,
  createSorteio,
  updatePessoa,
  ...Creators
};
export default connect(mapStateToProps, mapDispatchToProps)(App);