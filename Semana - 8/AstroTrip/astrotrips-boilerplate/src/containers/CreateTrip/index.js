import React from 'react';
import {
  Container, FormTripContainer,
  Title, StyledTextField, ButtonSend,
  StyledSelect, StyledOption,
  InputDuration, StyledLabel, BtnGoBack
} from './style'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router'
import { setNewTrip } from '../../actions/'

class CreateTrip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        nameValue: "",
        planetValue: "",
        dateValue: "",
        descriptionValue: "",
        durationInDaysValue: "",
      },
      labelWidth: 0,
    }
  }

  componentDidMount() {
    const token = window.localStorage.getItem("token");

    if (!token) {
      this.props.goToLogin();
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.createNewTrip(this.state.form)
    window.alert("Viagem Criada com sucesso, Capitão!")
    this.props.goToListTrip()
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ form: { ...this.state.form, [name]: value } });
  }

  render() {
    return (
      <Container>
        <Title>Criar nova Viagem</Title>
        <FormTripContainer onSubmit={this.handleSubmit}>
          <StyledLabel htmlFor="nameValue">Título da Trip</StyledLabel>
          <StyledTextField
            required
            title="Digite no mínimo 5 letras"
            name="nameValue"
            type="text"
            label="Título"
            placeholder="Digite o nome da viagem"
            margin="normal"
            variant="outlined"
            value={this.state.form.nameValue}
            onChange={(event) => this.handleInputChange(event)}
            inputProps={{ pattern: "[A-Za-zÀ-ú ']{3,}" }}
          />
          <StyledLabel htmlFor="planetValue">Escolha um planeta:</StyledLabel>
          <StyledSelect
            name="planetValue"
            onChange={this.handleInputChange}
            value={this.state.form.planetValue}
            required
          >
            <StyledOption value=""></StyledOption>
            <StyledOption value="mercurio"> Mercúrio </StyledOption>
            <StyledOption value="venus">Vênus</StyledOption >
            <StyledOption value="terra">Terra</StyledOption >
            <StyledOption value="marte">Marte</StyledOption >
            <StyledOption value="jupiter">Júpiter</StyledOption>
            <StyledOption value="saturno">Saturno </StyledOption>
            <StyledOption value="urano"> Urano </StyledOption>
            <StyledOption value="netuno"> Netuno </StyledOption>
            <StyledOption value="plutao"> Plutão</StyledOption>
          </StyledSelect>
          <StyledLabel htmlFor="dataValue">Escolha uma Data para a Viagem:</StyledLabel>
          <StyledTextField
            required
            name="dateValue"
            id="date"
            label="Data da viagem"
            margin="normal"
            type="date"
            value={this.state.form.dateValue}
            onChange={this.handleInputChange}
            inputProps={{ pattern: "^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$." }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <StyledLabel htmlFor="descriptionValue">Descreva detalhes da viagem:</StyledLabel>
          <StyledTextField
            required
            type="text"
            name="descriptionValue"
            label="Descrição"
            rows="4"
            value={this.state.form.descriptionValue}
            onChange={this.handleInputChange}
            margin="normal"
            variant="outlined"
            inputProps={{ pattern: "^[A-Za-zÀ-ú ']{30,}" }}
          />
          <StyledLabel htmlFor="durationDaysValue">Duração da Viagem</StyledLabel>
          <InputDuration
            required
            name="durationInDaysValue"
            value={this.state.form.durationInDaysValue}
            onChange={this.handleInputChange}
            min="50"
            type="number"
            pattern=""
          />
          <ButtonSend
            type="submit"
          >Criar</ButtonSend>
        </FormTripContainer>
        <BtnGoBack onClick={this.props.goToListTrip}>Voltar a lista de viagens</BtnGoBack>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createNewTrip: (newTrip) => dispatch(setNewTrip(newTrip)),
  goToLogin: () => dispatch(push(routes.login)),
  goToListTrip: () => dispatch(push(routes.trips)),
})

export default connect(null, mapDispatchToProps)(CreateTrip);