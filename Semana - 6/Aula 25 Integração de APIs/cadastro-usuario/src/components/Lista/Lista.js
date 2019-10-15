import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ListaContainer = styled.div`
  display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	height: 40vh;
	padding: 5px;
	border-bottom: 1px dashed #fff;
`
const TitleUser = styled.h2`
	font-size: 1.5rem;
	align-self: center;
	color: #fff;
`
const ListUser = styled.ul`
	font-size: 1.5rem;
	color: #fff;
	margin: 5px;
	display: flex;
	flex-direction: column;
`
const NameUser = styled.li`
	padding: 5px;
	align-self: baseline;
`

const ButtonDelete = styled.button`
	align-self: baseline;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	color: #fff;
	background-color: red;
	font-weight: bold;
	border: none;
	cursor: pointer;
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
			`https://us-central1-future4-users.cloudfunctions.net/api/users/deleteUser?id=${userId}`,
			{
				headers: {
					'api-token': "c28d8d1f8a5fa4268324d365a6a5be87"
				}
			}
		);
		request
			.then(response => {
				window.alert("Usuário deletado com sucesso", response);
			})
			.catch(error => {
				window.alert("Erro! Usuário não foi deletado", error);
			});
	};

	render() {
		const userListNew = this.state.listUser.map((
			user, id) => {
			const funcaoIntermediaria = () => {
				const deleteUser = window.confirm("Tem certeza de que deseja deletar?");
				if (deleteUser) {
					this.deleteUser(user.id);
				} else {
					window.alert("Nada foi apagado")
				}
			};
			return <NameUser key={id}> {user.name} <ButtonDelete onClick={funcaoIntermediaria}>X</ButtonDelete></NameUser>;
		}
		)

		return (
			<ListaContainer>
				<TitleUser>Usuários Cadastrados</TitleUser>

				<ListUser>{userListNew}</ListUser>

			</ListaContainer>
		)
	}
}

export default Lista;