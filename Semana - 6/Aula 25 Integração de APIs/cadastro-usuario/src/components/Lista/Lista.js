import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ListaContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid blue;
`


class Lista extends React.Component {
	constructor() {
		super();
		this.state = {
			listUser: [],
		};
	}

	componentDidMount() {
		this.getListUser();
	}

	getListUser = () => {

		const request = axios.get(
			"https://us-central1-future4-users.cloudfunctions.net/api/users/getAllUsers",
			{
				headers: {
					'api-token': "c28d8d1f8a5fa4268324d365a6a5be87"
				}
			}
		);

		request
			.then(response => {
				console.log(response);
				this.setState({ listUser: response.data.result });

			})
			.catch(error => {
				console.log(error);
			});

	}


	deleteUser = userId => {
		const request = axios.delete(
			`https://us-central1-future4-users.cloudfunctions.net/api/users/deleteUser?${userId}`,
			{
				headers: {
					'api-token': "c28d8d1f8a5fa4268324d365a6a5be87"
				}
			}
		);
		request
			.then(response => {
				console.log(response);
			})
			.catch(error => {
				console.log(error);
			});
	};









render() {
	const userListNew = this.state.listUser.map((user, id) => {
			const funcaoIntermediaria = () => {
				this.deleteUser(user.id)
			}
		return <li key={id}> {user.name} <button onClick={funcaoIntermediaria}>X</button></li>
	})

	return (
		<ListaContainer>
			<h2>Usuários Cadastrados:</h2>
			<ul>{userListNew}</ul>
		</ListaContainer>
	)
}
}

export default Lista;