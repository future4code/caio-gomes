import React from 'react';
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router'
import {
  DetailContainer, TextItem, TitleTrip,
  ContainerCandidate, Grid,
  BtnContainer, BtnHome, TitleDetailTrip,
  TextItemCandidate, DetailTripWrapper,
   BtnListTrip, Span, Button, ContainerButton, SpanItem
} from './style'

class TripDetailPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const token = window.localStorage.getItem("token");

    if (!token) {
      this.props.goToLogin();
    }
  }

  render() {
    const details = this.props.tripSelected

    return (
      <DetailContainer>
        <TitleDetailTrip>Detalhe das viagens e Seus Candidatos</TitleDetailTrip>
        <DetailTripWrapper>
          <TitleTrip>{details.name}</TitleTrip>
          <TextItem><Span>Nome do Planeta:</Span> {details.planet}</TextItem>
          <TextItem><Span>Descrição:</Span>  {details.description}</TextItem>
          <TextItem><Span>Data da Viagem: </Span> {details.date}</TextItem>
          <TextItem><Span>Duração da Viagem: </Span> {details.durationInDays} dias</TextItem>
        </DetailTripWrapper>
        <Grid>
        {this.props.candidateTrip.map((candidate) => {
            return <ContainerCandidate key={candidate.id}>
              <TextItemCandidate><SpanItem>Nome: </SpanItem>{candidate.name}</TextItemCandidate>
              <TextItemCandidate><SpanItem>Idade: </SpanItem>{candidate.age}</TextItemCandidate>
              <TextItemCandidate><SpanItem>País:</SpanItem>{candidate.country}</TextItemCandidate>
              <TextItemCandidate><SpanItem>Motivação:</SpanItem>{candidate.applicationText}</TextItemCandidate>
              <BtnContainer>
                <Button
                >APROVAR</Button>
                <Button
                >REJEITAR</Button>
              </BtnContainer>
            </ContainerCandidate>
          })}
          </Grid>
       <ContainerButton>
          <BtnHome onClick={this.props.goToHome}>HOME</BtnHome>
          <BtnListTrip onClick={this.props.goToListTrip}>VOLTAR A LISTA DE VIAGEM</BtnListTrip>
        </ContainerButton>
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
  goToHome: () => dispatch(push(routes.root)),
  goToLogin: () => dispatch(push(routes.login)),
  goToListTrip: () => dispatch(push(routes.trips))
})

export default connect(mapStateToProps, mapDispatchToProps)(TripDetailPage);