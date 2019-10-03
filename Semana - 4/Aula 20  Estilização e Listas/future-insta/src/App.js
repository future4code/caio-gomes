import React from 'react';
import './App.css';
import { Post } from './components/Post/Post'
import Perfil from './components/Post/caio.jpeg'
import Favorite from './favorite-white.svg'
import FavoriteBlack from './favorite.svg'
import Comment from './comment.svg'



class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            foto: Perfil,
            nome: 'Caio Gomes',
            imagem: 'https://picsum.photos/id/721/200',
            curtidasAtuais: false,
            numeroCurtida : false,
            numeroCurtir: 0,
            numeroComentario: 0,
        }
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

    render(){
       


    return (
        <div className="App">
            <div className="container">
                <Post 
                    foto={this.state.foto}
                    nome={this.state.nome}
                    imagem={this.state.imagem}
                    imagemCurtir={Favorite}
                    numeroCurtir={this.state.numeroCurtir}
                    imagemComentario={Comment}
                    numeroComentario={this.state.numeroComentario}
                />
            </div>
        </div>
    );

    }
    }




export default App;
