import React from 'react';
import { useReduxState, Provider, useDispatch } from "../redux/react-redux-f4";
import NewTask from './NewTask';
import MenuTask from './MenuTask';
import ListTasks from './ListTasks';
import styled from 'styled-components';


const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const Title = styled.h1`
	font-size: 4rem;
	color: orange;

`
export function AppContainer(props) {
	
	
	return (
		<Container>
			<Title>4Task</Title>
			<NewTask/>
			<ListTasks/>
			<MenuTask/>
		</Container>
	)
}