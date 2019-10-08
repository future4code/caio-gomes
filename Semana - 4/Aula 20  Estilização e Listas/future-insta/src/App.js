import React from 'react';
import './App.css';
import { Post } from './components/Post/Post'
import { Formulario } from './components/Formulario/Formulario'
import Perfil from './components/Post/caio.jpeg'
import Favorite from './favorite-white.svg'
import FavoriteBlack from './favorite.svg'
import Comment from './comment.svg'



class App extends React.Component {
    constructor(){
        super();
        this.state = {
            foto: Perfil,
            nome: 'Caio Gomes',
            imagem: 'https://picsum.photos/id/721/200',
            curtidasAtuais: false,
            numeroCurtida : false,
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
        let curtida = Favorite;
        let numero = 0;
    
        if(this.state.curtidasAtuais){
            curtida = FavoriteBlack;
        }

        if(this.state.numeroCurtida){
            numero = 1;
        }


        return (
            <div className="App">
                <Formulario>
        
                </Formulario>
                <Post 
                    foto={this.state.foto}
                    nome={this.state.nome}
                    imagem={this.state.imagem}
                    imagemCurtir={curtida}
                    numeroCurtir={numero}
                    imagemComentario={Comment}
                    numeroComentario={this.state.numeroComentario}
                />
            </div>
        );

    }
}
    




export default App;
