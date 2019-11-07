import React from 'react';
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router'
import { HomeContainer, AstroTrip, StyledButton, ContainerBtn, SubTitle, ContainerTitles, AstronautaImg, RocketImg } from './style'
import Astronauta from './astronauta.png'
import Rocket from './rocket.svg'

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HomeContainer>
        <ContainerTitles>
          <AstroTrip>AstroTrip<span> <RocketImg src={Rocket} /></span></AstroTrip>
          <SubTitle>"Encontre as melhores viagens espaciais!"</SubTitle>
        </ContainerTitles>
        <ContainerBtn>
          <StyledButton
            variant="contained"
            onClick={this.props.goToApplicationForm}>QUERO SER TRIPULANTE!</StyledButton>
          <StyledButton
            variant="contained"
            onClick={this.props.goToLoginPage}
          >SOU O CAPITÃO!</StyledButton>
        </ContainerBtn>
        <AstronautaImg src={Astronauta} />
      </HomeContainer>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goToApplicationForm: () => dispatch(push(routes.form)),
    goToLoginPage: () => dispatch(push(routes.login))
  }
}
export default connect(null, mapDispatchToProps)(HomePage);