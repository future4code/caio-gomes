import React from 'react';
import { useDispatch, useReduxState } from "../redux/react-redux-f4";

const ListTasks = (props) => {
	const state = useReduxState();
	
	
	const listTask = state.listTasks.map((task)=>{
		return <div><p>{task}</p></div>
	})
	
	return(
		<div>
			{listTask}
		</div>
	)

}
export default ListTasks;