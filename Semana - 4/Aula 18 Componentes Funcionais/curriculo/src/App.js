import React from 'react';
import './App.css';
import { BigCard } from './components/BigCard/BigCard'
import { SmallCard} from './components/SmallCard/SmallCard'
import { ImageButton } from './components/ImageButton/ImageButton'
import Email from '../src/components/img/email.svg'
import Home from '../src/components/img/house.svg'

const smallCards = {
  imagem: {Email},
  titulo: 'Email: ',
  endereço: 'caiogomeslog@gmail.com'
}

const smallCards2 = {
  imagem: {Home},
  titulo: 'Endereço: ',
  endereço: 'Rua Palmeira Tucuim, 67'
}

const bigCard = {
  titulo : <h3>Caio Brian Gomes Gonçalves</h3>,
  imagem : <img src="../img/cartman.jpg" alt=""/>,
  descricao : <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. 
    Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. 
    Mé faiz elementum girarzis, </p>
}

const bigCard2 = {
  titulo : <h3>Livraria Saraiva</h3>,
  imagem : <img src="../img/cartman.jpg" alt=""/>,
  descricao : <p>Vendedor de livros</p>
}

const bigCard3 = {
  titulo : <h3>Livraria Leitura</h3>,
  imagem : <img src="../img/cartman.jpg" alt=""/>,
  descricao : <p>Vendedor de livros, também.</p>
}


function App() {
  return (
    <div className="App">
      <BigCard titulo={bigCard.titulo} imagem={bigCard.imagem} descricao={bigCard.descricao}/>
      <SmallCard imagem={smallCards.imagem} titulo={smallCards.titulo} email={smallCards.endereço}/>
      <SmallCard imagem={smallCards2.imagem} titulo={smallCards2.titulo} email={smallCards2.endereço}/>
      <ImageButton/>
      <BigCard titulo={bigCard2.titulo} imagem={bigCard2.imagem} descricao={bigCard2.descricao}/>
      <BigCard titulo={bigCard3.titulo} imagem={bigCard3.imagem} descricao={bigCard3.descricao}/>
      
    </div>
  );
}

export default App;
