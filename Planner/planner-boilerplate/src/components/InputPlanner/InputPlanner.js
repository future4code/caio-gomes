import React from 'react';
import { connect } from 'react-redux'
import { setNewTask } from '../../actions/inputsActions';
import { WrapperTask, StyledInput, StyledForm, StyledSelect, StyledButton } from './styles'

class InputPlanner extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			day: ''
		}
	}

	handleInputChange = event => {
		this.setState({ [event.target.name]: event.target.value })
	}

	onSubmitForm = event => {
		event.preventDefault();
		const { text, day } = this.state;
		this.props.newTask(text, day);
	}

	render() {
		return (
			<WrapperTask>
				<StyledForm onSubmit={this.onSubmitForm}>
					<StyledInput
						required
						placeholder="Qual sua Tarefa?"
						type="text"
						name="text"
						onChange={this.handleInputChange}
						value={this.state.text}
					/>
					<StyledSelect
						required
						name="day"
						id="day"
						onChange={this.handleInputChange}
						value={this.state.day}
					>
						<option selected>Escolha um dia</option>
						<option value="Segunda">Segunda</option>
						<option value="Terça">Terça</option>
						<option value="Quarta">Quarta</option>
						<option value="Quinta">Quinta</option>
						<option value="Sexta">Sexta</option>
						<option value="Sábado">Sábado</option>
						<option value="Domingo">Domingo</option>
					</StyledSelect>
					<StyledButton type="submit">Criar Tarefa</StyledButton>
				</StyledForm>
			</WrapperTask>
		)
	}

}

const mapDispatchToProps = dispatch => ({
	newTask: (text, day) => dispatch(setNewTask(text, day))
})
export default connect(null, mapDispatchToProps)(InputPlanner);