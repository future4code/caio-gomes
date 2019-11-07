import React from 'react';
import { CountryList } from './countryList'
import { connect } from 'react-redux'
import { fetchTrips, applyToTrip } from '../../actions'
import { FormContainer } from './style'



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
    console.log(this.state.form)
    console.log(this.state.tripChoosed)
    this.props.applyTrip(this.state.form, this.state.form.TripId)
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ form: { ...this.state.form, [name]: value } });
    console.log(event.target.value)
  }


  render() {

    return (
      <div>
        <h1>Inscreva-se em uma das nossas Trips</h1>
        <FormContainer onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            name="name"
            placeholder="seu nome"
            value={this.state.form.name}
            onChange={this.handleInputChange}
          />
          <input
            required
            value={this.state.form.age}
            name="age"
            placeholder="sua idade"
            onChange={this.handleInputChange}
            type="number" />
          <textarea
            required
            value={this.state.form.aplication}
            name="aplication"
            onChange={this.handleInputChange}
            rows="5"
            placeholder="descreva porque quer fazer parte da trip"
          />
          <input
            required
            value={this.state.form.profession}
            name="profession"
            onChange={this.handleInputChange}
            placeholder="Profissão"
            type="text" />
          <label htmlFor="country">Qual o seu país?</label>
          <select
            required
            value={this.state.form.country}
            name="country"
            onChange={this.handleInputChange}
            name="country">
            <option value=""></option>
            {CountryList.map((country, i) => {
              return <option key={i}>{country}</option>
            })}
          </select>
          <label htmlFor="tripId">Escolha uma Trip</label>
          <select
            required
            onChange={this.handleInputChange}
            name="tripId">
            <option value=""></option>
            {this.props.listTrips.map((trips) => {
              return <option
                value={trips.id}
                key={trips.name}>{trips.name} - {trips.planet}</option>
            })}
          </select>
          <button type="submit">Enviar</button>
        </FormContainer>

      </div >
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
  applyTrip: (trip, id) => dispatch(applyToTrip(trip, id))

})

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationForm);
