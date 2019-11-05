import React from 'react';
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router'
import { HomeContainer, AstroTrip, StyledButton, ContainerBtn, SubTitle, ContainerTitles, AstronautaImg } from './style'
import Astronauta from './astronauta.png'

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HomeContainer>
        <ContainerTitles>
          <AstroTrip>AstroTrip</AstroTrip>
          <SubTitle>"Encontre as melhores viagens espaciais!"</SubTitle>
        </ContainerTitles>
        <ContainerBtn>
          <StyledButton
            variant="contained"
            onClick={this.props.goToListTrips}>QUERO SER TRIPULANTE!</StyledButton>
          <StyledButton
            variant="contained"
          >SOU O CAPITÃO!</StyledButton>
        </ContainerBtn>
        <AstronautaImg src={Astronauta}/>
      </HomeContainer>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToListTrips: () => dispatch(push(routes.trips))
  }
}
export default connect(null, mapDispatchToProps)(HomePage);