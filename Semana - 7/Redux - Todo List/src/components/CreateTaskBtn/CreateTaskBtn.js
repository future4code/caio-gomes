import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { newTasksAction } from '../../actions'
import { connect } from 'react-redux'
import tasks from '../../reducers/tasks';



const StyledButton = styled(Button)`
	width: 35%;
	margin: 10px;
	align-self: center;
`

const CreateTaskButton = props => {
	return (

		<StyledButton
			variant="contained"
			color="primary"
			onClick={() => props.createNewTask(tasks)}
		>
			Criar Tarefa
		</StyledButton>
	)
}

const mapStateToProps = state => {
	return {
	  task: state.tasks.task
	};
};

const mapDispatchToProps = dispatch => {
	return {
		createNewTask: task => dispatch(newTasksAction(task))
	};
  };

  export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskButton);