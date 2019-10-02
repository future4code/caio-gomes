import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Eu from './caio.jpeg';
import Favorite from './favorite-white.svg'
import Comment from './comment.svg'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Caio Gomes',
      imagem : 'https://picsum.photos/id/1000/300/200',
      curtidasAtuais: 0,
    };
  }

  clicandoNoCurtir = () => {
    const curtidaAtual = this.state.curtidasAtuais;
    this.setState({curtidasAtuais: curtidaAtual + 1})
  };



  render(){
    return(
      <div className="App">
        <div className="container">
          <header className="header-post">
            <img id="perfil" src={Eu}/>
            <p>{this.state.name}</p>
          </header>
          <img id="imagem-post"src={this.state.imagem} alt=""/>
          <div className="botao-post">
            <div className="container-button">
              <img src={Favorite} onClick={this.clicandoNoCurtir}/>
              <p>{this.state.curtidasAtuais}</p>
            </div>
            <div className="container-button">
              <img src={Comment} alt=""/>
              <p>0</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App;