import React from 'react';
import {connect} from 'react-redux'
import { fetchTrips } from "../../actions"
import { fetchDetailTrip } from '../../actions'
import { push } from 'connected-react-router'
import { routes } from '../Router'
import { ListContainer, TitleListTrip, TripsContainer, TripName, DescriptionTrip, BtnHome } from './style'

class ListTripsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.getAllTrips()
  }
  onClickTripDetail = () => {
    this.props.goToTripDetail()
  }
  
  render() {
    return (
      <ListContainer>
        <TitleListTrip>Viagens espetaculares da AstroTrip</TitleListTrip>
        {this.props.listTrips.map((trips) => {
          return <TripsContainer key={trips.name} >
            <TripName 
            onClick={this.props.getListDetail(trips.id), this.onClickTripDetail}>{trips.name}
            </TripName>
            <DescriptionTrip>{trips.description}</DescriptionTrip>
          </TripsContainer>
        })}
        <BtnHome onClick={this.props.goToHome}>Voltar Para Casa</BtnHome>
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
  goToHome: () => dispatch(push(routes.root))
})
export default connect (mapStateToProps, mapDispatchToProps)(ListTripsPage)