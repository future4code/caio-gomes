import React from 'react';
import './App.css';
import { BigCard } from './components/BigCard/BigCard'
import { SmallCard} from './components/SmallCard/SmallCard'
import { ImageButton } from './components/ImageButton/ImageButton'


const smallCards = {
  imagem: 'https://picsum.photos/200/200/',
  titulo: 'Email: ',
  endereço: 'caiogomeslog@gmail.com'
}

const smallCards2 = {
  imagem: 'https://picsum.photos/200/200?a=1',
  titulo: 'Endereço: ',
  endereço: 'Rua Palmeira Tucuim, 67'
}

const bigCard = {
  titulo : <h3>Caio Brian Gomes Gonçalves</h3>,
  imagem : <img src="#" alt=""/>,
  descricao : <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. 
    Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. 
    Mé faiz elementum girarzis, </p>
}

const bigCard2 = {
  titulo : <h3>Livraria Saraiva</h3>,
  imagem : <img src="./cartman.jpg" alt=""/>,
  descricao : <p>Vendedor de livros</p>
}

const bigCard3 = {
  titulo : <h3>Livraria Leitura</h3>,
  imagem : <img src="./cartman.jpg" alt=""/>,
  descricao : <p>Vendedor de livros, também.</p>
}

const ImageButtons = {
  botao : <button> <img src="#" alt=""/> Ver Mais</button>
}

const ImageButtons2 = {
  botao : <button> <img src="#" alt=""/> Facebook</button>
}

function App() {
  return (
    <div className="App">
      <PageSection>
        <BigCard titulo={bigCard.titulo} imagem={bigCard.imagem} descricao={bigCard.descricao}/>
        <SmallCard imagem={smallCards.imagem} titulo={smallCards.titulo} email={smallCards.endereço}/>
        <SmallCard imagem={smallCards2.imagem} titulo={smallCards2.titulo} email={smallCards2.endereço}/>
        <ImageButton botao={ImageButtons.botao}/>
      </PageSection>
      <PageSection2>
        <BigCard titulo={bigCard2.titulo} imagem={bigCard2.imagem} descricao={bigCard2.descricao}/>
        <BigCard titulo={bigCard3.titulo} imagem={bigCard3.imagem} descricao={bigCard3.descricao}/>
      </PageSection2>
      <PageSection3>
        <ImageButton botao={ImageButtons2.botao}/>
      </PageSection3>
    </div>
  );
}

function PageSection (props) {
  return(
    <div>
      <h2>Dados Pessoais</h2>
      {props.children}
    </div>
  )
}

function PageSection2 (props) {
  return(
    <div>
      <h2>Experiências profissionais</h2>
      {props.children}
    </div>
  )
}

function PageSection3 (props) {
  return(
    <div>
      <h2>Minhas redes sociais</h2>
      {props.children}
    </div>
  )
}
export default App;
