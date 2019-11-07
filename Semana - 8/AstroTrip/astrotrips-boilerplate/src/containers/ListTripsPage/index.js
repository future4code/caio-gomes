import React from 'react';
import { connect } from 'react-redux'
import { fetchTrips } from "../../actions"
import { fetchDetailTrip } from '../../actions'
import { push } from 'connected-react-router'
import { routes } from '../Router'
import { ListContainer, TitleListTrip, TripsContainer, TripName, WrapperAllTRips, BtnHome } from './style'

class ListTripsPage extends React.Component {
  constructor(props) {
    super(props);
   
  }

  componentDidMount() {
    const token = window.localStorage.getItem("token");

    if (!token) {
      this.props.goToLogin();
    }
    this.props.getAllTrips()
  }

  render() {
   return (
      <ListContainer>
        <TitleListTrip>Lista de Viagens Disponíveis</TitleListTrip>
        <WrapperAllTRips>
          {this.props.listTrips.map((trips) => {
            return <TripsContainer key={trips.name} >
              <TripName
                onClick={
                  this.props.getListDetail(trips.id),
                  this.props.goToTripDetail}
                >{trips.name}
              </TripName>
            </TripsContainer>
          })}
        </WrapperAllTRips>
        <BtnHome onClick={this.props.goToHome}>HOME</BtnHome>
      </ListContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    listTrips: state.trips.allTrips
  }
}

const mapDispatchToProps = dispatch => ({
  getAllTrips: () => dispatch(fetchTrips()),
  goToTripDetail: () => dispatch(push(routes.detail)),
  getListDetail: (detailTrips) => dispatch(fetchDetailTrip(detailTrips)),
  goToHome: () => dispatch(push(routes.root)),
  goToLogin: () => dispatch(push(routes.login))
})
export default connect(mapStateToProps, mapDispatchToProps)(ListTripsPage)