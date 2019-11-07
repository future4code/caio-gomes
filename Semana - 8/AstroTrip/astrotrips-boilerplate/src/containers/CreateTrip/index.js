import React from 'react';
import { Container, FormTripContainer, Title, StyledTextField } from './style'
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

  handleSubmit = event => {
    event.preventDefault();
    this.props.createNewTrip(this.state.form)
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ form: { ...this.state.form, [name]: value } });
    console.log(event.target.value)
  }

  render() {
    console.log(this.state)
    return (
      <Container>
        <Title>Criar nova Viagem</Title>
        <FormTripContainer onSubmit={this.handleSubmit}>

          <StyledTextField
            required
            title="Digite no mínimo 5 letras"
            name="nameValue"
            type="text"
            label="Nome da Viagem"
            placeholder="Digite o nome da viagem"
            margin="normal"
            variant="outlined"
            value={this.state.form.nameValue}
            onChange={(event) => this.handleInputChange(event)}
            inputProps={{ pattern: "^[a-zA-Z ]{5,30}$" }}
          />
          <label htmlFor="planetValue">Escolha um planeta</label>
          <select
            name="planetValue"
            onChange={this.handleInputChange}
            value={this.state.form.planetValue}
            required
          >
            <option required value="mercurio"> Mercúrio </option>
            <option value="venus">Vênus</option >
            <option value="terra">Terra</option >
            <option value="marte">Marte</option >
            <option value="jupiter">Júpiter</option>
            <option value="saturno">Saturno </option>
            <option value="urano"> Urano </option>
            <option value="netuno"> Netuno </option>
          </select>

          <StyledTextField
            required
            name="dateValue"
            id="date"
            label="Data da viagem"
            type="date"
            value={this.state.form.dateValue}
            onChange={this.handleInputChange}
            inputProps={{ pattern: "^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$." }}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <StyledTextField
            required
            type="text"
            name="descriptionValue"
            label="Descrição da viagem"
            rows="4"
            value={this.state.form.descriptionValue}
            onChange={this.handleInputChange}
            margin="normal"
            variant="outlined"
            inputProps={{ pattern: "^[a-zA-Z \s]{30,}" }}
          />
          <label htmlFor="durationDaysValue">Duração da Viagem</label>
          <input
            required
            name="durationInDaysValue"
            label="Duração da viagem"
            value={this.state.form.durationInDaysValue}
            onChange={this.handleInputChange}
            min="50"
            type="number"
            pattern=""
          />
          <button
            type="submit"
          >Enviar</button>
        </FormTripContainer>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createNewTrip: (newTrip) => dispatch(setNewTrip(newTrip))
})

export default connect(null, mapDispatchToProps)(CreateTrip);