import React from 'react';
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router'
import { HomeContainer, AstroTrip, StyledButton, ContainerBtn } from './style'

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HomeContainer>
        <AstroTrip>AstroTrip</AstroTrip>
        <h2>Encontre as melhores viagens espaciais!</h2>
        <ContainerBtn>
          <StyledButton
            variant="contained"
            onClick={this.props.goToListTrips}>Quero ser Tripulante!</StyledButton>
          <StyledButton
            variant="contained"
          >Sou o Capitão!</StyledButton>
        </ContainerBtn>
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