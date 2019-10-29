import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'


const StyledList = styled.div`
	height: 30vh;
	border: 1px solid red;
	width: 90%;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: center;
`


const ListTasks = props => {
	
	const taskList = props.tasks.task.map()
	
	return (
		<StyledList>
			<h3>Lista de Tasks:</h3>
		</StyledList>
	)
}


const mapStateToProps = state => {
	console.log(state)
	return {
	  task: state.tasks.listTasks
	};
};

export default connect(mapStateToProps, null)(ListTasks);