/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import TextField from '@material-ui/core/TextField'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { addTask } from '../../actions/index'
import Button from '@material-ui/core/Button'


const ContainerNewTask = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
	margin: 20px;
`

const StyledTextField = styled(TextField)`
	color: gray;
	width: 100%;
	&:focus{
		outline: none
	}
`
const StyledButton = styled(Button)`
	width: 35%;
	margin: 10px;
	align-self: center;
`

class NewTask extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			taskValue: ''
		}
	}

	onChangeTask = event => {
		this.setState({ taskValue: event.target.value })
	}

	onClickCreateTask = () => {
		this.props.addNewTask(this.state.taskValue)
		this.setState({taskValue: ""})
	}
	
	render() {
		return (
			<ContainerNewTask>
				<StyledTextField
					label={'Qual sua Tarefa'}
					multiline
					onChange={this.onChangeTask}
					value={this.state.taskValue}
				/>
				<StyledButton
					variant="contained"
					color="primary"
					onClick={this.onClickCreateTask}
				>
					Criar Tarefa
				</StyledButton>
			</ContainerNewTask>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	addNewTask: (text) => dispatch(addTask(text))
})

export default connect(null, mapDispatchToProps)(NewTask)