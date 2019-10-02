import React from 'react';
import './App.css';
import Eu from './caio.jpeg';
import Favorite from './favorite-white.svg'
import FavoriteBlack from './favorite.svg'
import Comment from './comment.svg'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      name: 'Caio Gomes',
      imagem : 'https://picsum.photos/id/1000/300/200',
      curtidasAtuais: false,
      numeroCurtida : false,
      comentario : false,
      numeroComentario: false,
      numeroComment : 0,
      
    };
  }

  clicandoNoCurtir = () => {
    const curtidaAtual = this.state.curtidasAtuais;
    const numeroAtual = this.state.numeroCurtida;

    const novaCurtida = {
      curtidasAtuais : !curtidaAtual,
      numeroCurtida : !numeroAtual
    }
    this.setState(novaCurtida)
  };


  clicandoComentario = () => {
    const mostrandoComentario = this.state.comentario;
    const comentarioAtual = this.state.numeroComentario;
    
    const novoComentario = {
      comentario: !mostrandoComentario,
      numeroComentario: !comentarioAtual,

    }
    this.setState(novoComentario)
  }

  comentei = () => {
    const commentAtual = this.numeroComment;
    this.setState({numeroComment: commentAtual + 1})
  };


  render(){
    let curtida = Favorite;
    let numero = 0;
    let comment;
   

    if(this.state.curtidasAtuais){
      curtida = FavoriteBlack;
    }

    if(this.state.numeroCurtida){
      numero = 1;
    }


    if(this.state.comentario){
      comment = <div className="comment-container">
      <input type="text" placeholder="Escreva seu comentário"/>
      <button onClick={this.comentei}>Comentar</button>
      </div>
    }
    
    
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
            <img src={curtida} onClick={this.clicandoNoCurtir}/> 
              <p>{numero}</p>
            </div>
            <div className="container-button">
              <img src={Comment} onClick={this.clicandoComentario}/>
              <p>{this.numeroComment}</p>
              
            </div>
            
          </div>
          {comment}
        </div>
      </div>
    )
  }
}
export default App;