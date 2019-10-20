import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ContainerAllPlaylists = styled.div`
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		flex-grow: 1;
		width: 50%;
		height: 50vh;
		margin: 20px;
		border: 1px solid white;
	`

const TitlePlaylist = styled.h1 `
	font-size: 3rem;
	color: #fff;
	align-self: center;
`
const Playlist = styled.p`
	font-size: 2rem;
	font-weight:bold;
	align-self: center;
	margin-top: 0;
`
const PlaylistName = styled.p`
	font-size: 1.5rem;
	font-weight: bold;
	align-self: center;
	margin: 10px;
	padding: 10px;
	border: 2px solid black;
	border-color: #323B3F;
	width: 80%;
	display: flex;
	justify-content: space-between;
	cursor: pointer;

	&:hover {
		color: white;
	}
`
const ButtonDeletePlaylist = styled.button`
	background-color: red;
	color: white;
	border: none;
	font-weight: bold;
	font-size: 1rem;
	margin: 5px;
	cursor: pointer;
	transition: all .2s ease-in-out;

	&:hover{
		transform: scale(1.1);
	}

`


function ListAllPlaylists(props) {


	const deletePlaylist = playlistId => {
		const deleteUser = window.confirm("Tem certeza de que deseja deletar?");
		if (deleteUser) {
			const request = axios
				.delete
				(`https://us-central1-spotif4.cloudfunctions.net/api/playlists/deletePlaylist?playlistId=${playlistId}`,
					{
						headers: {
							'auth': "c28d8d1f8a5fa4268324d365a6a5be87"
						}
					});
			request
				.then(response => {
					window.alert("Playlist deletada com sucesso", response);
					props.getAllPlaylists();
				});
		}
	}


	const allPlaylists = props.showAllPlaylists.map((playlist) => {
		return <PlaylistName
			onClick={() => props.clickForAddNewMusic(playlist)}
			key={playlist.name}>
			{playlist.name}
			<ButtonDeletePlaylist onClick={() => deletePlaylist(playlist.id)}>Excluir</ButtonDeletePlaylist>
		</PlaylistName>
	});

	return (
		<ContainerAllPlaylists>
			<TitlePlaylist>Suas Playlists</TitlePlaylist>
			<Playlist>Selecione uma playlist :</Playlist>
			{allPlaylists}
		</ContainerAllPlaylists>
	)

}

export default ListAllPlaylists;