import React from 'react';
import { CountryList } from './countryList'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router'
import { fetchTrips, applyToTrip } from '../../actions'
import { FormContainer, Wrapper, StyledSelect, ButtonSend, StyledLabel, StyledOption, StyledTitle, BtnHome } from './style'
import TextField from '@material-ui/core/TextField';

class ApplicationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: "",
        age: "",
        aplication: "",
        profession: "",
        country: "",
      },
    }
  }

  componentDidMount() {
    this.props.getAllTrips()
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.applyTrip(this.state.form, this.state.form.TripId)
    window.alert("Sua requisição foi feita com sucesso, aguarde a nossa resposta")
    this.props.goToHome()
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ form: { ...this.state.form, [name]: value } });
  }

  render() {
    return (
      <Wrapper>
        <StyledTitle>Inscreva-se em uma das nossas Trips</StyledTitle>
        <FormContainer onSubmit={this.handleSubmit}>
          <TextField
            required
            label="Qual seu Nome?"
            variant="outlined"
            margin="normal"
            type="text"
            name="name"
            placeholder="seu nome"
            value={this.state.form.name}
            onChange={this.handleInputChange}
            inputProps={{ pattern: "[A-Za-zÀ-ú ']{3,}" }}
          />
          <TextField
            required
            label="Qual sua idade?"
            margin="normal"
            variant="outlined"
            value={this.state.form.age}
            name="age"
            placeholder="sua idade"
            onChange={this.handleInputChange}
            type="number"
            inputProps={{min: "18"}}
          />
          <TextField
            multiline
            variant="outlined"
            label="Descreva porque quer fazer parte dessa Trip"
            rows="4"
            required
            margin="normal"
            value={this.state.form.aplication}
            name="aplication"
            onChange={this.handleInputChange}
            rows="5"
            inputProps={{pattern: "[A-Za-zÀ-ú ']{3,}"}}
          />
          <TextField
            required
            variant="outlined"
            label="Qual sua Profissão?"
            margin="normal"
            value={this.state.form.profession}
            name="profession"
            onChange={this.handleInputChange}
            placeholder="Profissão"
            inputProps={{ pattern: "[A-Za-zÀ-ú ']{10,}" }}
            type="text" />
          <StyledLabel htmlFor="country">Qual o seu país?</StyledLabel>
          <StyledSelect
            required
            value={this.state.form.country}
            name="country"
            onChange={this.handleInputChange}
            name="country">
            <StyledOption value=""></StyledOption>
            {CountryList.map((country, i) => {
              return <StyledOption key={i}>{country}</StyledOption>
            })}
          </StyledSelect>
          <StyledLabel htmlFor="tripId">Escolha uma Trip:</StyledLabel>
          <StyledSelect
            required
            onChange={this.handleInputChange}
            name="tripId">
            <StyledOption value=""></StyledOption>
            {this.props.listTrips.map((trips) => {
              return <StyledOption
                value={trips.id}
                key={trips.name}>{trips.name} - Planeta: {trips.planet}</StyledOption>
            })}
          </StyledSelect>
          <ButtonSend type="submit">ENVIAR</ButtonSend>
        </FormContainer>
        <BtnHome onClick={this.props.goToHome}>HOME</BtnHome>
      </Wrapper >
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
  applyTrip: (trip, id) => dispatch(applyToTrip(trip, id)),
  goToHome: () => dispatch(push(routes.root))
})

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationForm);
