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
import Emprego1 from './components/BigCard/saraiva.png'
import Emprego2 from './components/BigCard/leitura.png'
import Eu from './components/BigCard/caio.jpeg'

const SmallCards = {
  imagem: <img src={Email}/>,
  titulo: 'Email: ',
  endereço: 'caiogomeslog@gmail.com'
}

const SmallCards2 = {
  imagem: <img src={House}/>,
  titulo: 'Endereço: ',
  endereço: 'Rua Palmeira Tucuim, 67'
}

const BigCard1 = {
  titulo : <h3>Caio Brian Gomes Gonçalves</h3>,
  imagem : <img src={Eu}/>,
  descricao : <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. 
    Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. 
    Mé faiz elementum girarzis, </p>
}

const BigCard2 = {
  titulo : <h3>Livraria Saraiva</h3>,
  imagem : <img src={Emprego1}/>,
  descricao : <p>Mussum ipsum cacilds, vidis litro abertis. 
    Consetis adipiscings elitis. Pra lá , depois divoltis porris</p>
}

const BigCard3 = {
  titulo : <h3>Livraria Leitura</h3>,
  imagem : <img src={Emprego2}/>,
  descricao : <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. 
    Pra lá , depois divoltis porris</p>
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
        <BigCard titulo={BigCard1.titulo} imagem={BigCard1.imagem} descricao={BigCard1.descricao}/>
        <SmallCard imagem={SmallCards.imagem} titulo={SmallCards.titulo} email={SmallCards.endereço}/>
        <SmallCard imagem={SmallCards2.imagem} titulo={SmallCards2.titulo} email={SmallCards2.endereço}/>
        <ImageButton botao={ImageButtons.botao}/>
       <h2>Experiências Profissionais</h2>
        <BigCard titulo={BigCard2.titulo} imagem={BigCard2.imagem} descricao={BigCard2.descricao}/>
        <BigCard titulo={BigCard3.titulo} imagem={BigCard3.imagem} descricao={BigCard3.descricao}/>
        <h2>Minhas redes sociais</h2>
        <ImageButton botao={ImageButtons2.botao}/>
      </PageSection>
    </div>
  );
}



export default App;
