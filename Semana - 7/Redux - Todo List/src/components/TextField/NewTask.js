import React from 'react';
import { useDispatch, useReduxState } from "../../redux/react-redux-f4";
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

const StyledTextField = styled(TextField)`
	color: gray;

	&:focus{
		outline: none
	}
`



const handleNewTask = (event) => {
	return {
		type: "EDIT_TASK",
		value: event.target.value
	};

};

const NewTask = () => {
	const dispatch = useDispatch();
	const state = useReduxState();
	
	return (
		<div>
			<StyledTextField
				type="text"
				label="Crie uma nova tarefa"
				placeholder="digite a tarefa"
				value={state.task}
				variant="outlined"
				onChange={(event)=>dispatch(handleNewTask(event))}
				/>
			<button onClick={()=>dispatch(createNewTask())}> Criar Tarefa </button>
		</div>
	)
}

export default NewTask;