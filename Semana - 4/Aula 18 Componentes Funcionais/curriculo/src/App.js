import React from 'react';
import './App.css';
import { BigCard } from './components/BigCard/BigCard'
import { SmallCard} from './components/SmallCard/SmallCard'
import { ImageButton } from './components/ImageButton/ImageButton'
import {PageSection} from './components/PageSection/PageSection'
import Expand from './components/ImageButton/expand.svg'
import Facebook from './components/ImageButton/facebook.png'
import Email from './components/SmallCard/email.svg'
import House from './components/SmallCard/house.svg'

const smallCards = {
  imagem: <img src={Email}/>,
  titulo: 'Email: ',
  endereço: 'caiogomeslog@gmail.com'
}

const smallCards2 = {
  imagem: <img src={House}/>,
  titulo: 'Endereço: ',
  endereço: 'Rua Palmeira Tucuim, 67'
}

const bigCard = {
  titulo : <h3>Caio Brian Gomes Gonçalves</h3>,
  imagem : <img src="https://picsum.photos/200/200?a=r" alt=""/>,
  descricao : <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. 
    Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. 
    Mé faiz elementum girarzis, </p>
}

const bigCard2 = {
  titulo : <h3>Livraria Saraiva</h3>,
  imagem : <img src="https://picsum.photos/200/200?a=r"/>,
  descricao : <p>Vendedor de livros</p>
}

const bigCard3 = {
  titulo : <h3>Livraria Leitura</h3>,
  imagem : <img src="https://picsum.photos/200/200?a=r"/>,
  descricao : <p>Vendedor de livros, também.</p>
}

const ImageButtons = {
  botao : <button> <img src={Expand}/> Ver Mais</button>
}

const ImageButtons2 = {
  botao :  <button><img src={Facebook}/>Facebook</button>
}

function App() {
  return (
    <div className="App">
      <PageSection>
        <h2>Dados Pessoais</h2>
        <BigCard titulo={bigCard.titulo} imagem={bigCard.imagem} descricao={bigCard.descricao}/>
        <SmallCard imagem={smallCards.imagem} titulo={smallCards.titulo} email={smallCards.endereço}/>
        <SmallCard imagem={smallCards2.imagem} titulo={smallCards2.titulo} email={smallCards2.endereço}/>
        <ImageButton botao={ImageButtons.botao}/>
       <h2>Experiências Profissionais</h2>
        <BigCard titulo={bigCard2.titulo} imagem={bigCard2.imagem} descricao={bigCard2.descricao}/>
        <BigCard titulo={bigCard3.titulo} imagem={bigCard3.imagem} descricao={bigCard3.descricao}/>
        <h2>Minhas redes sociais</h2>
        <ImageButton botao={ImageButtons2.botao}/>
      </PageSection>
    </div>
  );
}



export default App;
