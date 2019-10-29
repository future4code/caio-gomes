import React from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { editTaskAction } from '../../actions'
import tasks from '../../reducers/tasks';


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
	width: 50%;
	margin: 10px;
	align-self: center;
`


const NewTask = props => {
	const handleNewTask = event => {
		props.editTextTask(event.target.value);
	};
	
	return (
		<ContainerNewTask>
			<StyledTextField
				type="text"
				label="Crie uma nova tarefa"
				placeholder="digite a tarefa"
				value={props.task}
				variant="outlined"
				onChange={handleNewTask}
				/>
			<StyledButton
				variant="contained" 
				color="primary"
			> 
			Criar Tarefa </StyledButton>
		</ContainerNewTask>
	)
};

const mapStateToProps = state => {
	return {
	  task: state.tasks.task
	};
};

const mapDispatchToProps = dispatch => {
	return {
		editTextTask: task => dispatch(editTaskAction(task))
	};
  };

console.log(tasks.task);

export default connect(mapStateToProps, mapDispatchToProps)(NewTask);