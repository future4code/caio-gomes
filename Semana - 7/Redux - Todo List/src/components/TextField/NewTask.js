import React from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';


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


const handleNewTask = (event) => {
	return {
		type: "EDIT_TASK",
		value: event.target.value
	};

};

const NewTask = () => {
	
	
	return (
		<ContainerNewTask>
			<StyledTextField
				type="text"
				label="Crie uma nova tarefa"
				placeholder="digite a tarefa"
				// value={state.task}
				variant="outlined"
				// onChange={(event)=>dispatch(handleNewTask(event))}
				/>
			<StyledButton
				variant="contained" 
				color="primary"
			> 
			Criar Tarefa </StyledButton>
		</ContainerNewTask>
	)
}

export default NewTask;