import React from 'react';
import Cadastro from './components/Cadastro/Cadastro'
import Lista from './components/Lista/Lista'
import styled from 'styled-components'
import axios from 'axios'


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border: 1px solid red;
`




class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      changePage: false,
    };
  }


  onChangeUserName = (event) => {
    this.setState({ name: event.target.value })
    console.log(this.state.name)
  }


  onChangeUserEmail = (event) => {
    this.setState({ email: event.target.value })
    console.log(this.state.email)
  }


  clickSaveUser = () => {
    const data = {
      name: this.state.name,
      email: this.state.email
    };

    const request = axios.post(
      "https://us-central1-future4-users.cloudfunctions.net/api/users/createUser",
      data,
      {
        headers: {
          'api-token': "c28d8d1f8a5fa4268324d365a6a5be87"
        }
      }
    );

    request
      .then(response => {
        window.alert("O usuário foi cadastrado com sucesso!", response);

      })
      .catch(error => {
        window.alert("Erro ao cadastrar usuário, tente novamente", error);
      });

  }


  clickChangePage = () => {
    const viewPage = !this.state.changePage;
    this.setState({ changePage: viewPage })
  }


  render() {
    const currentPage = this.state.changePage ?
      <div>
        <Lista />
        <button onClick={this.clickChangePage}>Ir para página de Cadastro</button>
      </div>
      :
      <React.Fragment>
        <Cadastro
          userName={this.state.name}
          userEmail={this.state.email}
          onChangeUserName={this.onChangeUserName}
          onChangeUserEmail={this.onChangeUserEmail}
          clickButtonSave={this.clickSaveUser}
        />
        <button onClick={this.clickChangePage}>Ir para página de lista</button>
      </React.Fragment>

    return (
      <Container>
        {currentPage}
      </Container>
    )
  }
}

export default App;