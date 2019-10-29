import React from 'react';
import { useDispatch, useReduxState } from "../../redux/react-redux-f4";
import styled from 'styled-components';


const ContainerTask = styled.div`
	display: flex;
	justify-content: space-around;
	border: 1px solid black;
`
const TaskP = styled.div`
	margin: 10px;
`



const ListTasks = (props) => {
	const state = useReduxState();
	
	
	const listTask = state.listTasks.map((task)=>{
		return <ContainerTask>
			<button>Checked</button>
			<TaskP>{task}</TaskP>
			<button>X</button>
			
			</ContainerTask>
	})
	
	return(
		<div>
			{listTask}
		</div>
	)

}
export default ListTasks;