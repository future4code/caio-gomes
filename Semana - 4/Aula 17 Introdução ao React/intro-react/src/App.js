import React from 'react';
import './App.css';
import imagem1 from './img/imagem1.png';
import imagem2 from './img/imagem2.png';
import imagem3 from './img/imagem3.png';
import imagem4 from './img/imagem4.png';
import imagem5 from './img/imagem5.png';
import imagem6 from './img/imagem6.png';
import imagem7 from './img/imagem7.png';
import imagem8 from './img/imagem8.jpg';

function App() {
  return (
    <div className="App">
        <header className="menu-top">
          <h1>FutureTube</h1>
          <input type="search" placeholder="Pesquise Aqui!">
          </input>
        </header>
        <aside className="left-menu">
          <a href="#">Home</a>
          <a href="#">Inscrição</a>
          <a href="#">Histórico</a>
          <a href="#">Assistir depois</a>
          <a href="#">Configurações</a>
          </aside>
          <section className="images">
            <figure>
              <img src={imagem1} className="thumb" alt=""></img>
              <figcaption>Noite boa</figcaption>
            </figure>
            <figure>
              <img src={imagem7} className="thumb" alt=""></img>
              <figcaption>Floresta do Iluminado</figcaption>
            </figure>
            <figure>
              <img src={imagem3} className="thumb" alt=""></img>
              <figcaption>Limão</figcaption>
            </figure>
            <figure>
              <img src={imagem4} className="thumb" alt=""></img>
              <figcaption>Mar azul</figcaption>
            </figure>
            <figure>
              <img src={imagem5} className="thumb" alt=""></img>
              <figcaption>Tinta caindo</figcaption>
            </figure>
            <figure>
              <img src={imagem6} className="thumb" alt=""></img>
              <figcaption>Cidade Costeira</figcaption>
            </figure>
            <figure>
              <img src={imagem2} className="thumb" alt=""></img>
              <figcaption>Servidor Mr Robot</figcaption>
            </figure>
            <figure>
              <img src={imagem8} className="thumb" alt=""></img>
              <figcaption>Praia Grande</figcaption>
            </figure>
          </section>
          <footer className="im-footer">
            <h1>Eu sou o fooooter!</h1>
          </footer>
    </div>
  );
}

export default App;
