import React from 'react';
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router'
import {
  DetailContainer, TextItem, TitleTrip,
  ContainerCandidate, WrapperCandidates,
  BtnContainer, BtnHome, TitleDetailTrip, TextItemCandidate, DetailTripWrapper
} from './style'
import Button from '@material-ui/core/Button'

class TripDetailPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const details = this.props.tripSelected

    return (
      <DetailContainer>
        <TitleDetailTrip>Detalhe das viagens e Seus Candidatos</TitleDetailTrip>
        <DetailTripWrapper>
          <TitleTrip>{details.name}</TitleTrip>
          <TextItem>Nome do Planeta:{details.planet}</TextItem>
          <TextItem>Descrição:{details.description}</TextItem>
          <TextItem>Data da Viagem: {details.date}</TextItem>
          <TextItem>Duração da Viagem:{details.durationInDays}</TextItem>
        </DetailTripWrapper>
        <WrapperCandidates>
          {this.props.candidateTrip.map((candidate) => {
            return <ContainerCandidate>
              <TextItemCandidate>{candidate.name}</TextItemCandidate>
              <TextItemCandidate>{candidate.age}</TextItemCandidate>
              <TextItemCandidate>{candidate.country}</TextItemCandidate>
              <TextItemCandidate>{candidate.applicationText}</TextItemCandidate>
              <BtnContainer>
                <Button
                  variant="contained" color="primary"
                >APROVAR</Button>
                <Button
                  variant="contained" color="primary"
                >REJEITAR</Button>
              </BtnContainer>
            </ContainerCandidate>
          })}
        </WrapperCandidates>
        <BtnHome onClick={this.props.goToHome}>HOME</BtnHome>
      </DetailContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    tripSelected: state.trips.selectedTrip,
    candidateTrip: state.trips.selectedTrip.candidates || []
  }
}

const mapDispatchToProps = dispatch => ({
  goToHome: () => dispatch(push(routes.root))
})

export default connect(mapStateToProps, mapDispatchToProps)(TripDetailPage);