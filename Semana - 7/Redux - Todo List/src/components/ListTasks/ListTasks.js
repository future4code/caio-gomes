/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import Checkbox from '@material-ui/core/Checkbox'


const ListTaskContainer = styled.div`
	margin: 5px;
	border: 1px solid black;
	box-shadow: 1px 1px #888888;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
`
const DeleteBtn = styled(DeleteForeverRoundedIcon)`
	margin: 5px;
	font-size: 30px;
	cursor: pointer;
	transition: all .2s ease-in-out;

        &:hover {
          transform: scale(1.2);
		}
` 

class ListTasks extends React.Component {
	render() {
		return this.props.tasksLists.map(task => 
			<ListTaskContainer>
				<Checkbox />
				<p>{task.text}</p>
				<DeleteBtn />
			</ListTaskContainer>
		)	
	}
}

function mapStateToProps(state) {
	console.log(state)
	return {
		tasksLists: state.tasks
	}
}

export default connect(mapStateToProps)(ListTasks)