import React from 'react';
import Cadastro from './components/Cadastro/Cadastro'
import Lista from './components/Lista/Lista'
import styled from 'styled-components'
import axios from 'axios'


const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 40vw;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  background-color: #464B4D;
`

const ContainerCadastroPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

const ContainerListaPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

const ButtonChangePage = styled.button`
  height: 50px;
  width: 60%;
  align-self: center;
  font-size:1.5rem;
  font-weight: bold;
  cursor: pointer;
  border: none;
  background-color: #F0687C;
  color: #FFFCEE;
  margin-bottom: 20px;

  &:hover {
		background-color: #B63D65;
	}
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
      <ContainerListaPage>
        <Lista />
        <ButtonChangePage onClick={this.clickChangePage}>Ir para página de Cadastro</ButtonChangePage>
      </ContainerListaPage>
      :
      <ContainerCadastroPage>
        <Cadastro
          userName={this.state.name}
          userEmail={this.state.email}
          onChangeUserName={this.onChangeUserName}
          onChangeUserEmail={this.onChangeUserEmail}
          clickButtonSave={this.clickSaveUser}
        />
        <ButtonChangePage onClick={this.clickChangePage}>Ir para página de lista</ButtonChangePage>
      </ContainerCadastroPage>

    return (
      <Container>
        {currentPage}
      </Container>
    )
  }
}

export default App;