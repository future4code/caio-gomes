import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import Checkbox from '@material-ui/core/Checkbox';

const ListTaskContainer = styled.div`
	margin: 5px;
	border: 1px solid black;
	box-shadow: 1px 1px #888888;
	width: 50%;
	display: flex;
	justify-content: space-between;
	align-items: center;
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
		return this.props.task.map((tasks, index) => (
			<ListTaskContainer key={index}>
				
				<Checkbox/>
				<p>{tasks}</p>
				<DeleteBtn/>
			</ListTaskContainer>	
		))
	}
}


const mapStateToProps = state => {
	console.log(state)
	return {
	  task: state.tasks.listTasks
	};
};

export default connect(mapStateToProps, null)(ListTasks);