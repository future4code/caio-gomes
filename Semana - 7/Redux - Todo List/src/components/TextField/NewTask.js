import React from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
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
			
		</ContainerNewTask>
	)
};

const mapStateToProps = state => {
	console.log(state.tasks)
	return {
	  task: state.tasks.task
	};
};

const mapDispatchToProps = dispatch => {
	console.log(tasks)
	return {
		editTextTask: task => dispatch(editTaskAction(task))
	};
  };

  export default connect(mapStateToProps, mapDispatchToProps)(NewTask);