import React from 'react'
import styled from 'styled-components'

const ContainerAddPlaylist = styled.div`
		background-color: #323B3F;
		border-radius: 5px;
		width: 20%;
		height: 40vh;
		flex-grow: 1;
		display: flex;
    	flex-direction: column;
		height: 30%;
		margin: 20px;
		padding: 10px;
		align-items: center;
`

const TitleAddPlaylist = styled.h1`
	font-family: Helvetica, sans-serif;
	color: white;
	font-size: 3rem;
`
const LabelAddPlaylist = styled.label`
	font-size: 1.5rem;
	color: white;
`
const InputAddPlaylist = styled.input`
	width: 80%;
	border: none;
	border-bottom: 2px solid white;
	color: white;
	font-size: 1.5rem;
	margin: 10px;
	background-color: #323B3F;

	&:focus {
		outline: none;
	}
`
const ButtonAddPlaylist = styled.button`
	width: 200px;
	height: 50px;
	font-size: 1.5rem;
	margin: 20px;
	border: none;
	cursor: pointer;
	background-color: #F67F20;
	color: #fff;
	font-weight: bold;
	transition: all .2s ease-in-out;

	&:hover{
		transform: scale(1.1);
	}

`

function AddPlaylist(props) {
	return (
		<ContainerAddPlaylist>
			<TitleAddPlaylist>Spotif4 Play</TitleAddPlaylist>
			<LabelAddPlaylist id="nome">Crie sua Playlist:</LabelAddPlaylist>
			<InputAddPlaylist
				type="text"
				id="nome"
				value={props.value}
				placeholder="nome da playlist"
				onChange={props.onChange}
			/>
			<ButtonAddPlaylist onClick={props.onClick}>Adicionar</ButtonAddPlaylist>
		</ContainerAddPlaylist>

	)


}

export default AddPlaylist;