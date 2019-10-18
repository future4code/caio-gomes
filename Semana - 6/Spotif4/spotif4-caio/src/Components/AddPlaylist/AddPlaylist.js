import React from 'react'
import styled from 'styled-components'

const ContainerAddPlaylist = styled.div`
    border-right: 3px solid black;
    width: 20%;
    display: flex;
    flex-direction: column;
		height: 100vh;
`

function AddPlaylist (props){
	return (
			<ContainerAddPlaylist>
				<h1>Crie Sua Playlist</h1>
				<label id="nome">Crie sua Playlist:</label>
				<input
					type="text"
					id="nome"
					value={props.value}
					placeholder="nome da playlist"
					onChange={props.onChange}
				/>
				<button onClick={props.onClick}>Adicionar</button>
			</ContainerAddPlaylist>

		)
	

}

export default AddPlaylist;