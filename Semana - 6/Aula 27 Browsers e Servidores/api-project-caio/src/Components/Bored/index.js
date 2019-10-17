import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	
`

const ButtonActivity = styled.button`
	width: 500px;
	height: 100px;
	font-size: 3rem;
	font-weight: bold;
	cursor: pointer;
	
`



class Bored extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPrice: 0,
			currentParticipant: 1,
			currentAcecessibility: 0,
			activity: '',
		}
	}

	componentDidMount() {

	}

	getActivity = () => {
		axios.get("http://www.boredapi.com/api/activity", {

		}).then((response) => {
			console.log(response)
			this.setState({ activity: response.data.activity });
		})
	}

	onChangeValuePrice = (event) => {
		const newValue = Number(event.target.value);
		this.setState({ currentPrice: newValue });
	}

	onChangeValueParticipant = (event) => {
		const newValue = Number(event.target.value);
		this.setState({ currentParticipant: newValue });
	}

	render() {
		return (
			<Container>
				<ButtonActivity onClick={this.getActivity}>Gerar Atividade!</ButtonActivity>
				{this.state.activity && (
					<h1>Atividade: {this.state.activity}</h1>
				)}
			</Container>
		)
	}
}

export default Bored