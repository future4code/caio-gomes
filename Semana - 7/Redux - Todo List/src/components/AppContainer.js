import React from 'react';
import NewTask from './TextField/NewTask';
import MenuTask from './MenuTaskOption/MenuTask';
import styled from 'styled-components';
import CreateTaskButton from './CreateTaskBtn/CreateTaskBtn';
import ListTasks from './ListTasks/ListTasks';



const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 4px solid black;
	margin: 20px;
`

const Title = styled.h1`
	font-size: 4rem;
	color: orange;

`
function AppContainer () {
	return ( 
		<Container>
			<Title>4Tasks</Title>
			<NewTask/>
			<CreateTaskButton/>
			<ListTasks/>
			<MenuTask/>
		</Container>
	)
}

export default AppContainer;